import React from "react";
import NewTodoDialog from "./NewTodoDialog";
import Column from "./Column";
import { useTaskStore } from "../lib/store";
import { Card } from "antd";

const Columns = ({ projectId }) => {
  const projects = useTaskStore((state) => state.projects);
  const selectedProject = projects.find((project) => project.id === projectId);
  // {
  //   value: "todo",
  //   label: "To Do ",
  // },
  // {
  //   value: "in progress",
  //   label: "In Progress",
  // },
  // {
  //   value: "resolved",
  //   label: "Resolved",
  // },
  // {
  //   value: "done",
  //   label: "Done",
  // },
  return (
    <div>
      <h1 className="text-gray-900 text-xl mb-2">
        Project Name:
        <span className="ml-3">{selectedProject?.title}</span>
      </h1>
      <div className="border rounded-md text-gray-900 w-fit p-3 mb-3">
        Team Members
        {selectedProject?.members.map((member) => (
          <span
            key={member}
            className="rounded-md bg-accent-light px-2 py-1 ml-3"
          >
            {member}
          </span>
        ))}
      </div>
      <NewTodoDialog projectId={projectId} />
      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column projectId={projectId} title="Todo" status="todo" />
        <Column
          projectId={projectId}
          title="In Progress"
          status="in progress"
        />
        <Column projectId={projectId} title="Done" status="done" />
        <Column projectId={projectId} title="Resolved" status="resolved" />

        {/* <Column projectId={projectId} title="Todo" status="TODO" />
        <Column
          projectId={projectId}
          title="In Progress"
          status="IN_PROGRESS"
        />
        <Column projectId={projectId} title="Done" status="DONE" /> */}
      </section>
    </div>
  );
};

export default Columns;
