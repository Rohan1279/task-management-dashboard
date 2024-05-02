"use client";
import Columns from "@/app/components/Columns";
import Navbar from "@/app/components/Navbar";
import { useTaskStore } from "@/app/lib/store";
import React from "react";

const page = ({ params }) => {
  // console.log(params);
  return (
    <div>
      <section className="flex h-screen text-white">
        <Navbar />
        <div className="mx-auto w-full max-w-full px-44 py-12 ">
          <Columns projectId={params.projectId} />
        </div>
      </section>
    </div>
  );
};

export default page;
