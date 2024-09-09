import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Card, Flex, Tabs ,FormListFieldData} from "antd";
import { AuthState } from "../../constants/interfaces";
import { useAppDispatch, useAppSelector } from "../../hook/initial";
import { firebaseLogin, firebaseRegister } from "../../store/login.action";
import { confirmPasswordValidator, evaluatePasswordStrength, getPasswordStrengthColor, getPasswordStrengthText, passwordValidator } from "../../ultis/passwordCheck";

//Define the type of the form field
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  confirmPassword?: string;
};

//create a login page with React component
export default function LoginPage() {
  /* --------------------------------- Variable ------------------------------- */
  //const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [formHasErrors, setFormHasErrors] = useState(true);
  const {user,loading,error} = useAppSelector((state) => state.auth as AuthState);
  const dispatch = useAppDispatch();
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState("");
  /* --------------------------------- Action ------------------------------- */

  const onFinishLogin = (values: FieldType) => {
    dispatch(firebaseLogin({  user: { email: values.username, password: values.password }}));
  };

  const onFinishRegister = (values: FieldType) => {
    dispatch(firebaseRegister({ user: { email: values.username, password: values.password } }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);
    const strength = evaluatePasswordStrength(value);
    setPasswordStrength(strength);
  }, []);

  

  const loginFormComponent = (
    <Form form={loginForm} onFinish={onFinishLogin} onFinishFailed={onFinishFailed}>
      <Form.Item name="username" rules={[{ type: 'email', required: true, message: 'Please input a valid email!' }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, validator: passwordValidator }]}>
        <Input.Password placeholder="Password" onChange={handlePasswordChange} />
      </Form.Item>
      {passwordValue && (
        <div style={{ color: getPasswordStrengthColor(passwordStrength) }}>
          Password Strength: {getPasswordStrengthText(passwordStrength)}
        </div>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );

  const registerFormComponent = (
    <Form form={registerForm} onFinish={onFinishRegister} onFinishFailed={onFinishFailed} >
      <Form.Item name="username" rules={[{ type: 'email', required: true, message: 'Please input a valid email!' }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, validator: passwordValidator }]}>
        <Input.Password placeholder="Password" onChange={handlePasswordChange} />
      </Form.Item>
      {passwordValue && (
        <div style={{ color: getPasswordStrengthColor(passwordStrength) }}>
          Password Strength: {getPasswordStrengthText(passwordStrength)}
        </div>
      )}
      <Form.Item name="confirmPassword" dependencies={['password']} rules={[
        { required: true, message: 'Please confirm your password!' },
        confirmPasswordValidator(registerForm.getFieldValue),
      ]}>
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Flex vertical align="center" justify="center" style={{ height: "100vh" }}>
      <Card>
        <Tabs defaultActiveKey="1" style={{ width: "70vh", alignItems: "center" }}>
          <Tabs.TabPane tab="Sign In" key="1">
            {loginFormComponent}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign Up" key="2">
            {registerFormComponent}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </Flex>
  );
}