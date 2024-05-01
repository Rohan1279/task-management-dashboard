"use client";

import { useState } from "react";
import { useTaskStore } from "../lib/store";
import { Button, Modal, Input, Form, Select, Tag, DatePicker } from "antd";
const { TextArea } = Input;

export default function NewProjectModal({ open, setOpen }) {
  const addNewProject = useTaskStore((state) => state.addNewProject);

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [form] = Form.useForm();

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    // form.resetFields();
    setOpen(false);
  };
  const onFinish = (values) => {
    const title = values.title;
    const description = values.description;
    const members = values.members;

    if (!title || !description || !members) {
      return;
    }

    addNewProject(title, description, members);
    form.resetFields();
    setOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  const options = [
    {
      label: <span>🧔🏻‍♂️ Fairuj</span>,
      value: "🧔🏻‍♂️ fairuj",
    },
    {
      label: <span>👨🏻‍🦰 Fahim</span>,
      value: "👨🏻‍🦰 fahim",
    },
    {
      label: <span>👦🏻 Asif</span>,
      value: "👦🏻 asif",
    },
    {
      label: <span>👨🏻 Imran</span>,
      value: "👨🏻 imran",
    },
    {
      label: <span>👨🏻‍🦲 Micheal</span>,
      value: "👨🏻‍🦲 micheal",
    },
    {
      label: <span>👩🏻‍🦰 Samia</span>,
      value: "👩🏻‍🦰 robin",
    },
  ];

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <div>
      <Modal
        title="Add new Project"
        open={open}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="project-form"
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
                required: true,
                message: "Provide a description of the task",
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Assign at least one member",
              },
            ]}
            label="Add Members"
            name="members"
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
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
