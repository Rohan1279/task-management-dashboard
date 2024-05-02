"use client";
import { Menu } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  EditOutlined,
  HomeFilled,
  PlusCircleFilled,
  ProductFilled,
  SlackSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTaskStore } from "../lib/store";
import NewProjectModal from "./NewProjectModal";
const Navbar = () => {
  const projects = useTaskStore((state) => state.projects);
  const [current, setCurrent] = useState("mail");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: "Dashboard",
      key: "dashboard",
      onClick: () => {
        router.push("/dashboard");
      },
      icon: <HomeFilled />,
    },
    {
      label: "Projects",
      key: "projects",
      icon: <ProductFilled />,
      children: projects.map((project) => ({
        label: project.title,
        key: project.id,
        onClick: () => {
          router.push(`/projects/${project.id}`);
        },
      })),
    },
    {
      label: "Add",
      key: "add",
      icon: <PlusCircleFilled />,
      children: [
        {
          label: <span onClick={() => setIsModalOpen(true)}>Add Project</span>,
          icon: <ProductFilled />,
        },
        {
          label: "Add Task",
          icon: <EditOutlined />,
          children: projects.map((project) => ({
            label: project.title,
            key: project.id,
            onClick: () => {
              router.push(`/projects/${project.id}`);
            },
          })),
        },

        {
          label: "Add User",
          onClick: () => {
            // console.log("Add User");
          },
          icon: <UserOutlined />,
        },
      ],
    },
    {
      label: "Boards",
      key: "boards",
      icon: <SlackSquareOutlined />,
      children: projects.map((project) => ({
        label: project.title,
        key: project.id,
        onClick: () => {
          router.push(`/boards/${project.id}`);
        },
      })),
    },
  ];
  return (
    <>
      <NewProjectModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
        className="font-comfortaa pt-20 flex flex-col gap-y-2 w-48 bg-accent hover:"
      />
    </>
  );
};

export default Navbar;
