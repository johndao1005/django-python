// src/components/LandingPage.tsx
import React from 'react';
import { Layout, Menu, Button, Typography, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Row justify="center" style={{ marginTop: '50px' }}>
          <Col span={12} style={{ textAlign: 'center'}}>
            <Title level={1}>Welcome to Your Personal Finance Management App</Title>
            <Paragraph>
              Manage your finances effectively and effortlessly. Track your income, expenses, and savings with our user-friendly platform.
            </Paragraph>
            <Button type="primary" size="large" onClick={handleLoginClick}>Get Started</Button>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Finance App ©2024 Created by [Your Name]
      </Footer>
    </Layout>
  );
};

export default LandingPage;
