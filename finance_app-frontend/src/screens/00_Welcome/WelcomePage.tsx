// src/components/LandingPage.tsx
import React, { CSSProperties } from 'react';
import { Button, Typography, Row, Col, Card, Collapse, CollapseProps, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CaretRightOutlined
} from '@ant-design/icons';
const { Title, Paragraph } = Typography;

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const CallToAction = () => {
    return (
      <Row justify="center" style={{ margin: '50px' }}>
        <Col span={12} style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1}>Never think about tax again</Title>
            <Paragraph>
              Accountant and tax automation tool for sole traders.
            </Paragraph>
            <Button type="primary" size="large" onClick={handleLoginClick}>Sign Up</Button>
          </motion.div>
        </Col>
      </Row>
    )
  }


  const Features = () => {
    return (
      <Row justify="center" gutter={[16, 16]}>
        <Col span={8}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card title="Automatic tax calculations and payments">
              <p>We pay your taxes, so you don't have to. Our service includes:</p>
              <ul>
                <li>Tax calculation</li>
                <li>Tax payment</li>
                <li>Tax returns</li>
              </ul>
              <Button type="link">Learn More</Button>
            </Card>
          </motion.div>
        </Col>
        <Col span={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card title="Full access to the app">
              <p>Access all your financial data in one place. Features include:</p>
              <ul>
                <li>Income tracking</li>
                <li>Expense tracking</li>
                <li>Financial insights</li>
              </ul>
              <Button type="link">Learn More</Button>
            </Card>
          </motion.div>
        </Col>
        <Col span={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card title="We become your accountant">
              <p>Our team of chartered accountants will:</p>
              <ul>
                <li>File your taxes</li>
                <li>Answer your questions</li>
                <li>Provide financial advice</li>
              </ul>
              <Button type="link">Learn More</Button>
            </Card>
          </motion.div>
        </Col>
      </Row>
    )
  }

  const FAQ = () => {
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
    // Create an array of questions and answers using Antd Collapse component
    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
      {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{"text"}</p>,
        style: panelStyle,
      },
      {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{"text"}</p>,
        style: panelStyle,
      },
      {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{"text"}</p>,
        style: panelStyle,
      },
    ];
    return (
      <Row justify="center" style={{  margin: '50px'  }}>
        <Col span={12}>
        <Title level={2}>FAQs</Title>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{ backgroundColor:"transparent" }}
            items={getItems(panelStyle)}
          />
        </Col>
      </Row>
    )
  }

  const TopHero = () => {
 //Hero section divided in half, one side displays text and button and the other side displays an image
    return (
      <Row justify="center" style={{ margin: '50px' ,display:"flex", justifyContent:"space-between"}}>
            <Col span={12} style={{ textAlign: 'center', margin:"auto" }}>
              <Title level={1}>Get started today</Title>
              <Paragraph>
                Sign up for an account and start <br/>managing your finances effortlessly.
              </Paragraph>
              <Button type="primary" size="large" onClick={handleLoginClick}>Sign Up</Button>
            </Col>
            <Col span={12}>
              <img src="https://via.placeholder.com/400" alt="placeholder" style={{ width: '100%', height: 'auto' }} />
            </Col>        
      </Row>
    )
 
  }
  return (
    <>
      <TopHero />
      <Features />
      <FAQ />
      <CallToAction/>
    </>

  );
};

export default WelcomePage;
