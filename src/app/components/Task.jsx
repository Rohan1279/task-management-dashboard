"use client";
import { Tag } from "antd";
import { useTaskStore } from "../lib/store";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import TaskUpdateModal from "./TaskUpdateModal";
import TaskDetailModal from "./TaskDetailModal";
import { useState } from "react";

export default function Task({
  id,
  title,
  description,
  status,
  priority,
  tags,
  deadline,
  assignee,
}) {
  const dragTask = useTaskStore((state) => state.dragTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const options = [
    {
      value: "purple",
      label: "task",
    },
    {
      value: "gold",
      label: "hotfix",
    },
    {
      value: "green",
      label: "bug",
    },
    {
      value: "blue",
      label: "enhancement",
    },
  ];
  return (
    <>
      <TaskUpdateModal
        id={id}
        title={title}
        description={description}
        status={status}
        priority={priority}
        tags={tags}
        deadline={deadline}
        assignee={assignee}
        isOpen={isUpdateModalOpen}
        setIsOpen={setIsUpdateModalOpen}
      />
      <TaskDetailModal
        id={id}
        title={title}
        description={description}
        status={status}
        priority={priority}
        tags={tags}
        deadline={deadline}
        assignee={assignee}
        isOpen={isDetailModalOpen}
        setIsOpen={setIsDetailModalOpen}
      />
      <div
        className="relative group flex cursor-move items-start justify-between rounded-lg border px-3 py-2 text-gray-900  bg-white"
        onDragStart={() => dragTask(id)}
        draggable
      >
        <div>
          <div className="font-medium text-gray-700">
            <span className="text-xs">
              {tags.map((tag) => {
                const tagOption = options.find(
                  (option) => option.value === tag
                );
                return (
                  <Tag key={tag} color={tagOption.value} className="mx-1">
                    {" "}
                    {tagOption.label}
                  </Tag>
                );
              })}
            </span>
          </div>
          <span className="my-1 ml-1">{title}</span>
          <div className="flex justify-between w-full">
            <p className="text-xs font-light text-gray-500">
              {description.length > 10
                ? `${description.substring(0, 10)}...`
                : description}
            </p>
            <div className="absolute  bottom-2 right-3">
              <span className="rounded-md text-xs bg-accent-light px-2 py-1 mr-1">
                {assignee}
              </span>
              <span
                className={`
             
       ${priority === "high" && "text-red-500"}
       ${priority === "medium" && "text-yellow-500"}
       ${priority === "low" && "text-green-500"}
       text-xs
       `}
              >
                {priority}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-x-1 justify-end opacity-0 group-hover:opacity-100 transition-all">
          <SearchOutlined
            onClick={() => setIsDetailModalOpen(true)}
            className="cursor-pointer"
          />
          <EditOutlined onClick={() => setIsUpdateModalOpen(true)} />
          <button className="cursor-pointer" onClick={() => deleteTask(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-gray-500 hover:text-rose-400"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
