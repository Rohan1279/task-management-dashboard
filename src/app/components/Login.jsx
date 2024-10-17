"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useAuthStore } from "../lib/authStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      message.error("Username or password cannot be empty");
      return;
    } else {
      login(username);
      router.push("/dashboard");
      message.success("Sign up successful");
    }
  };

  return (
    <div className="flex w-screen h-screen ">
      <Image
        src="/ant.jpg"
        alt="ant"
        width={626}
        height={626}
        className="flex-2 hidden md:block w-1/2"
      />

      <div className="flex justify-center items-center w-full flex-1 bg-accent-light px-64">
        <Form
          onFinish={handleLogin}
          initialValues={{ remember: true }}
          className=""
        >
          <h1 className="text-2xl font-comfortaa font-bold mb-5 block">
            Welcome to Ant Task !
          </h1>
          <span className="text-xs block mb-4">Be like the Ant, 🐜</span>
          <span className="text-sm font-comfortaa ">
            Do you know that <br />{" "}
            <span className="underline decoration-wavy decoration-accent-dark">
              Ants
            </span>{" "}
            masterfully divide tasks within their colonies, with specialized
            roles in foraging, construction, caretaking, and defense, showcasing
            remarkable organization and efficiency. ??
          </span>
          <h1 className="text-2xl font-comfortaa font-bold mb-5 block mt-3">
            Sign Up
          </h1>
          <Form.Item
            label="Username"
            name="username"
            className="w-96"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="w-96"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
