import { Button, Flex, Input, Modal, Row, Form } from "antd";
import { ExpenseChart } from "./Charts";
import {
    PlusOutlined, ArrowsAltOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormInstance } from 'antd/es/form';
import { useAppDispatch, useAppSelector } from "../../../hook/initial";
import { RootState } from "../../../store";
import { firebaseLogin,firebaseRegister,firebaseLogout } from "../../../store/login.action";


export default function Overview() {
    const dispatch = useAppDispatch();
    const {user,loading,error} = useAppSelector((state) => state.auth);
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(firebaseRegister({ user: { email, password } }));
    };

    const handleLogin = () => {
        dispatch(firebaseLogin({ user: { email, password } }));
    };

    const modalToggle = () =>{
        setIsModalVisible(!isModalVisible)
    }
    const onFinishFailed = () => {
        console.log('Failed:');
    };

    return (
        <Row gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }} justify="space-around" className="welcome">
            <div style={{ margin: "auto 0", width: 300 }}>
                <h1>
                    Welcome back {user?.email}
                </h1>
                <Button onClick={modalToggle} type="primary" icon={<PlusOutlined />}>New Transactions</Button>
                {/*
            TODO : Add a to do list or upcoming events
             <div>
              To do list
            </div> */}
            </div>

            <Flex align="flex-center" vertical>
                <Flex align="flex-start" justify="center" gap="small" style={{ alignItems: "center", height: 28, marginTop: 50 }}>
                    <h2>Expense Breakdown</h2>
                    <Link to={"/transactions"}><ArrowsAltOutlined /></Link>
                </Flex>
                <ExpenseChart />
            </Flex>
            <Modal
                title="Form in Modal"
                open={isModalVisible}
                onCancel={modalToggle}
                footer={null}
            >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={handleLogin}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input  onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password  onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            </Modal>
        </Row>
    )

}