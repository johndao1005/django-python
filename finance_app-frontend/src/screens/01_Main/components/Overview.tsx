import { Button, Flex, Input, Modal, Row,Form } from "antd";
import { ExpenseChart } from "./Charts";
import {
    PlusOutlined, ArrowsAltOutlined
} from '@ant-design/icons';
import {  Link } from "react-router-dom";
import { useState } from "react";
import { FormInstance } from 'antd/es/form';



export default function Overview() {
    const username = "John"
    const [isModalVisible, setIsModalVisible] = useState(false);
    const modalToggle = () => {
        setIsModalVisible(!isModalVisible);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    const onFinish = (values:string) => {
        console.log('Success:', values);
        setIsModalVisible(false);
      };
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
                    Welcome back {username}
                </h1>
                <Button onClick={modalToggle} type="primary" icon={<PlusOutlined />}>New Transactions</Button>
                {/*
            TODO : Add a to do list or upcoming events
             <div>
              To do list
            </div> */}
            </div>

            <Flex  align="flex-center" vertical>
                <Flex align="flex-start" justify="center" gap="small" style={{ alignItems: "center", height:28, marginTop:50 }}>
                    <h2>Expense Breakdown</h2>
                    <Link to={"/transactions"}><ArrowsAltOutlined /></Link>
                </Flex>
                <ExpenseChart />
            </Flex>
            <Modal
        title="Form in Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={modalToggle}
        footer={null}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
        </Row>
    )

}