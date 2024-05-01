"use client";
import Columns from "@/app/components/Columns";
import { useTaskStore } from "@/app/lib/store";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <section className="flex h-screen  py-12 text-white">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Columns projectId={params.projectId} />
        </div>
      </section>
    </div>
  );
};

export default page;
