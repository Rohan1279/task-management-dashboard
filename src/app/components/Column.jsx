"use client";
import { Reorder } from "framer-motion";
import { useTaskStore } from "../lib/store";
import Task from "./task";
import { useEffect, useMemo, useState } from "react";

export default function Column({ title, status, projectId }) {
  const projects = useTaskStore((state) => state.projects);
  const tasks = projects.find((project) => project.id === projectId).tasks;

  const deleteTask = useTaskStore((state) => state.deleteTask);
  const editTask = useTaskStore((state) => state.editTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);

  const dragTask = useTaskStore((state) => state.dragTask);
  // recalculates filteredTasks only if tasks/status state changes
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  // const [filteredTasks, setFilteredTasks] = useState(prevfilteredTasks);

  // useEffect(() => {
  //   setFilteredTasks(prevfilteredTasks);
  // }, [prevfilteredTasks]);

  const handleDrop = (e) => {
    if (!draggedTask) return;
    editTask(draggedTask, status);
    dragTask(null);
  };
  useEffect(() => {
    useTaskStore.persist.rehydrate(); // rehydrates the store
    // only read the local storage once the component is mounted
  }, []);

  return (
    <section className="h-[600px] flex-1 font-comfortaa">
      <h2 className="ml-1 text-2xl font-semibold text-gray-700">{title}</h2>

      <div
        className="mt-3.5 h-full w-full rounded-xl shadow-md p-4"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-y-4">
          <Reorder.Group
            values={filteredTasks}
            //  onReorder={setFilteredTasks}
          >
            {filteredTasks.map((task) => (
              <Reorder.Item value={task} key={task.id} className="mb-4">
                <Task {...task} />
              </Reorder.Item>
            ))}
          </Reorder.Group>

          {filteredTasks.length === 0 && status === "TODO" && (
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Create a new task</p>
            </div>
          )}

          {tasks.length && filteredTasks.length === 0 && status !== "TODO" ? (
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Drag your tasks here</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
