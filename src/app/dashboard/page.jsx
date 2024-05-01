"use client";
import { Card } from "antd";
const { Meta } = Card;
import React, { useState } from "react";
import { useTaskStore } from "../lib/store";
import { useRouter } from "next/navigation";
import { Reorder } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import NewProjectModal from "../components/NewProjectModal";

const page = () => {
  const projects = useTaskStore((state) => state.projects);
  console.log(projects);
  const deleteProject = useTaskStore((state) => state.deleteProject);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex h-screen bg-accent-light/20 w-full ">
      <Navbar />
      <NewProjectModal open={isModalOpen} setOpen={setIsModalOpen} />

      <div className=" w-full h-full px-56 py-28 font-comfortaa">
        <Reorder.Group
          values={projects}
          //  onReorder={setProjects}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 "
        >
          <div className="col-span-1">
            <h2 className=" text-lg col-span-1 mb-10">
              Get started with your new Space! 🎊
            </h2>

            <h3 className="font-extrabold text-base mb-2">Projects</h3>
            {projects.map((project) => (
              <div value={project} key={project.id} className="mb-4">
                <Card
                  key={project.title}
                  title={project.title}
                  className="w-full hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <div className="flex gap-x-2 ">
                    <span
                      className="cursor-pointer hover:text-blue-500 flex gap-x-1"
                      onClick={() => router.push(`/projects/${project.id}`)}
                    >
                      <EyeOutlined />
                      View
                    </span>
                    <span className="cursor-pointer hover:text-green-500 flex gap-x-1">
                      <EditOutlined />
                      Edit
                    </span>
                    <span
                      onClick={() => deleteProject(project.id)}
                      className="cursor-pointer hover:text-red-500 flex gap-x-1"
                    >
                      <DeleteOutlined />
                      Delete
                    </span>
                  </div>
                  <h2>{project.description}</h2>
                </Card>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="mt-8 text-sm text-gray-500">
                <h2 className=" text-lg col-span-1 mb-10 flex gap-x-2 ">
                  You have no projects yet 😟 Create one to get started!
                  <PlusCircleOutlined
                    onClick={() => setIsModalOpen(true)}
                    className="hover:text-secondary cursor-pointer active:scale-95 transition-all"
                  />
                </h2>
              </div>
            )}
          </div>
        </Reorder.Group>
      </div>
    </div>
  );
};

export default page;
