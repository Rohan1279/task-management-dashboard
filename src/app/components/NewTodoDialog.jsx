"use client";

import { useState } from "react";
import { useTaskStore } from "../lib/store";
import { Button, Modal, Input, Form, Select, Tag, DatePicker } from "antd";
const { TextArea } = Input;

export default function NewTodoDialog({ projectId }) {
  const addNewTask = useTaskStore((state) => state.addNewTask);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [form] = Form.useForm();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      form.resetFields();
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    // form.resetFields();
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log(values);

    const title = values.title;
    const description = values.description;
    const priority = values.priority;
    const tags = values.tags;
    const deadline = values.deadline;
    const assignee = values.assignee;
    const status = values.status;

    if (
      !title ||
      !description ||
      !values.priority ||
      !values.tags ||
      !values.deadline ||
      !values.assignee ||
      !values.status
    ) {
      return;
    }

    addNewTask(
      projectId,
      title,
      description,
      priority,
      tags,
      deadline,
      assignee,
      status
    );
    form.resetFields();
    setOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
        }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <div>
      <Button type="primary" onClick={showModal} className="">
        Add New Task
      </Button>
      <Modal
        title="Add new todo"
        open={open}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="task-form"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className=""
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Enter the title of the task",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: false,
                message: "Provide a description of the task",
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Priority" name="priority">
            <Select
              initialvalues="medium"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "high", label: "High" },
                { value: "medium", label: "Medium" },
                { value: "low", label: "Low" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Tags" name="tags">
            <Select
              mode="multiple"
              tagRender={tagRender}
              initialvalues={["purple"]}
              style={{
                width: "100%",
              }}
              options={options}
            />
          </Form.Item>
          <Form.Item
            label="Deadline"
            name="deadline"
            rules={[
              {
                required: false,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item label="Assignee" name="assignee">
            <Select
              initialvalues="lucy"
              style={{
                width: 200,
              }}
              // onChange={handleChange}
              options={[
                {
                  label: <span>hr</span>,
                  title: "hr",
                  options: [
                    {
                      label: <span>Jack</span>,
                      value: "Jack",
                    },
                    {
                      label: <span>Lucy</span>,
                      value: "Lucy",
                    },
                  ],
                },
                {
                  label: <span>engineer</span>,
                  title: "engineer",
                  options: [
                    {
                      label: <span>Chloe</span>,
                      value: "Chloe",
                    },
                    {
                      label: <span>Lucas</span>,
                      value: "Lucas",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Select
              initialvalues="todo"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "todo",
                  label: "To Do ",
                },
                {
                  value: "in progress",
                  label: "In Progress",
                },
                {
                  value: "resolved",
                  label: "Resolved",
                },
                {
                  value: "done",
                  label: "Done",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            {/* <Button htmlType="reset">Reset</Button> */}
            <Button
              type="primary"
              htmlType="submit"
              // onClick={() => form.resetFields()}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
