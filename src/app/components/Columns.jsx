import React from "react";
import NewTodoDialog from "./NewTodoDialog";
import Column from "./Column";

const Columns = ({ projectId }) => {
  return (
    <div>
      <NewTodoDialog projectId={projectId} />
      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column projectId={projectId} title="Todo" status="TODO" />
        <Column
          projectId={projectId}
          title="In Progress"
          status="IN_PROGRESS"
        />
        <Column projectId={projectId} title="Done" status="DONE" />
      </section>
    </div>
  );
};

export default Columns;
