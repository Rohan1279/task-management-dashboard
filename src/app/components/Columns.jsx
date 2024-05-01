import React from "react";
import NewTodoDialog from "./NewTodoDialog";
import Column from "./Column";

const Columns = ({ projectId }) => {
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
