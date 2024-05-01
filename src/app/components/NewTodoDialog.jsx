"use client";

import { useState } from "react";
import { useTaskStore } from "../lib/store";
import { Button, Modal, Input, Form } from "antd";
const { TextArea } = Input;

export default function NewTodoDialog() {
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
    const title = values.title;
    const description = values.description;
    if (typeof title !== "string" || typeof description !== "string") return;
    addNewTask(title, description);
    form.resetFields();
    setOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
