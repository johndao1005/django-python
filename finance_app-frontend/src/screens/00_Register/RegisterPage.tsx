import React from "react";
import {  useNavigate } from "react-router-dom";
import useAuth from "../../hook/authticate";
import { Button, Checkbox, Form, Input,Card, Flex } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

//create a login page with React component
export default function RegisterPage() {
  const { user,login,logout } = useAuth();
  const navigate = useNavigate();
  const onFinish = (values: FieldType) => {}
  const onFinishFailed = (errorInfo: any) => {}
  //create Login form with React component takes email and password
  return (
   <Flex vertical align="center" justify="center" style={{ height: "100vh" }}>
      <Card>
     <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
   </Card>
   </Flex>
  )
  
}
