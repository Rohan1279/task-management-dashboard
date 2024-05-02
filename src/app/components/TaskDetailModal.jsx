import { Modal, Tag } from "antd";
import React, { useState } from "react";

const TaskDetailModal = ({ ...props }) => {
  const {
    id,
    title,
    description,
    status,
    priority,
    tags,
    deadline,
    assignee,
    isOpen,
    setIsOpen,
  } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    // form.resetFields();
    setIsOpen(false);
  };
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
    <div>
      <Modal
        open={isOpen}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[]}
        className="relative"
      >
        <div className="flex justify-between ">
          <span className="text-xs">
            {tags.map((tag) => {
              const tagOption = options.find((option) => option.value === tag);
              return (
                <Tag key={tag} color={tagOption.value} className="mb-2">
                  {" "}
                  {tagOption.label}
                </Tag>
              );
            })}
          </span>
          <h1 className="font-comfortaa font-bold mr-5">
            Due: {new Date(deadline).toLocaleDateString()}
          </h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">{title}</h1>
          <h2 className="mt-2">{description}</h2>
        </div>

        <div className=" w-full flex justify-between mt-3">
          <span className="rounded-md text-sm bg-accent-light px-2 py-1 mr-1">
            Assignee: {assignee}
          </span>
          <span
            className={`
             
       ${priority === "high" && "text-red-500"}
       ${priority === "medium" && "text-yellow-500"}
       ${priority === "low" && "text-green-500"}
       text-sm
       `}
          >
            Priority: {priority}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default TaskDetailModal;
