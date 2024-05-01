"use client";
import Image from "next/image";
import Columns from "./components/Columns";
import { Button, Dropdown, Menu, Tabs } from "antd";
import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const addTab = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const items = [
    {
      label: "Dashboard",
      key: "dashboard",
    },
    {
      label: "Projects",
      key: "projects",
    },
    {
      label: "Add",
      key: "add",
      children: [
        {
          // type: "group",
          label: "Add Task",
          // children: [
          //   {
          //     label: "Option 1",
          //     key: "setting:1",
          //   },
          //   {
          //     label: "Option 2",
          //     key: "setting:2",
          //   },
          // ],
        },
        {
          // type: "group",
          label: "Add Project",
          // children: [
          //   {
          //     label: "Option 3",
          //     key: "setting:3",
          //   },
          //   {
          //     label: "Option 4",
          //     key: "setting:4",
          //   },
          // ],
        },
        {
          label: "Add User",
        },
      ],
    },
  ];
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <section className="flex h-screen  py-12 text-white">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Columns />
        </div>
      </section>
    </>
  );
}
