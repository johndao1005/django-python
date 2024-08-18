import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, useAppDispatch, useAppSelector } from '../../hook/initial';
import { RootState } from '../../store';
import { mapUserCredentialToFirebaseUser } from '../../ultis/firebaseUserMapper'
import {  useNavigate } from 'react-router-dom';
import { Button, Card, Checkbox, Flex,Form, Input } from 'antd';
import { firebaseLogin, firebaseRegister } from '../../store/login.action';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

//create a login page with React component
export default function RegisterPage() {
  const navigate = useNavigate();
  const onFinish = (values: FieldType) => {}
  const onFinishFailed = (errorInfo: any) => {}
  //create Login form with React component takes email and password
  const dispatch = useAppDispatch();
  const {user,loading,error} = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(firebaseRegister({ user: { email, password } }));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser = mapUserCredentialToFirebaseUser(user);
        dispatch(firebaseLogin({user:currentUser}));
      } 
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
   <Flex vertical align="center" justify="center" style={{ height: "100vh" }}>
      <Card>
     <Form
    name="basic"
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
