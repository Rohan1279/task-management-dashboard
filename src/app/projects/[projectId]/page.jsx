"use client";
import { useTaskStore } from "@/app/lib/store";
import React from "react";

const page = ({ params }) => {
  const projects = useTaskStore((state) => state.projects);
  return <div>page for project {params.projectId}</div>;
};

export default page;
