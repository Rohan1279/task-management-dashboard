"use client";
import { Card } from "antd";
const { Meta } = Card;
import React from "react";
import { useTaskStore } from "../lib/store";
import { useRouter } from "next/navigation";

const page = () => {
  const projects = useTaskStore((state) => state.projects);
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {projects.map((project) => (
        <Card
          hoverable
          key={project.title}
          title={project.title}
          className="w-full"
          onClick={() => router.push(`/projects/${project.id}`)}
        >
          <Meta description={project.description} />
        </Card>
      ))}
    </div>
  );
};

export default page;
