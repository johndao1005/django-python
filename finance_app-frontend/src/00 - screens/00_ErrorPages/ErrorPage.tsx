import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../02 - hook/authticate";
import { Button, Checkbox, Form, Input, Card, Flex, Tabs ,FormListFieldData} from "antd";

//Define the type of the form field
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  confirmPassword?: string;
};

//create a login page with React component
export default function ErrorPage() {
  /* --------------------------------- UseState ------------------------------- */
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [formHasErrors, setFormHasErrors] = useState(true);
  const onFinish = (values: FieldType) => { }
  const onFinishFailed = (errorInfo: any) => { }
  // const onFieldsChange = (changedFields: Form.Item[], allFields: FormListFieldData[]) => {
  //   setFormHasErrors(allFields.some(field => field.f.length > 0));
  // };


  /* -------------------------------- Component ------------------------------- */

  const loginForm = <Form
    name="login"
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true,test: "test"}}
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
      rules={[
        { required: true, message: 'Please input your password!' },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/, message: 'Password must be 12 characters long, include an uppercase letter, a number, and a special character.' }
      ]}
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

  const registerForm = <Form
    name="register"
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true , test: "test"}}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    
    //TODO need to update to check for error
    // onFieldsChange={onFieldsChange}
    scrollToFirstError
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[
        { required: true, message: 'Please input your password!' },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/, message: 'Password must be 12 characters long, include an uppercase letter, a number, and a special character.' }
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item<FieldType>
      label="Confirm Password"
      name="confirmPassword"
      rules={[
        { required: true, message: 'Please check your password!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" disabled={formHasErrors}>
        Submit
      </Button>
    </Form.Item>
  </Form>

  /* ---------------------------------- Main ---------------------------------- */

  return (
    <Flex vertical align="center" justify="center" style={{ height: "100vh" }}>
      <Card>
        <Tabs defaultActiveKey="1" style={{ width: "70vh", alignItems: "center" }}>
          <Tabs.TabPane tab="Sign In" key="1">
            {loginForm}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign Up" key="2">
            {registerForm}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </Flex>
  )

}
