// src/components/LandingPage.tsx
import React, { CSSProperties } from 'react';
import { Button, Typography, Row, Col, Card, Collapse, CollapseProps, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Features from './components/Features';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import { title } from 'process';
import Hero from './components/Hero';

const { Title, Paragraph } = Typography;

const WelcomePage = () => {
  // Initialize the useNavigate hook
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  
  // CTA Details
  const CTADetails = {
    title:"Get started on your financial journey today",
    description:"Finance App is the perfect platform to manage your finances. Sign up now to get started.",
    buttonText:"Give it a try",
    buttonFunction: handleLoginClick,
    backgroundColor: "black"
  }
  // Hero Details
  const HeroDetails = {
    title:"Welcome to Your Personal Finance Management App",
    description:"Manage your finances effectively and effortlessly. Track your income, expenses, and savings with our user-friendly platform.",
    buttonText:"Get Started",
    buttonFunction: handleLoginClick,
    imageUrl:"/isometric-financial-analytics-1.png",
    left2Right:true
  }

    // Hero Feature 1 Details
  const HeroFeature1 = {
    title: "All-in-One Financial Management",
    description: "Manage all types of financial details including stocks, savings, and more. Our platform provides a holistic view of your finances.",
    buttonText: "",
    buttonFunction: handleLoginClick,
    imageUrl: "/isometric-financial-analytics-on-stock-market.png",
    left2Right: true
  }
  
  // Hero Feature 2 Details
  const HeroFeature2 = {
    title: "AI-Driven Financial Insights",
    description: "Integrate with AI to provide customized financial suggestions but please understand this is not financial advice.",
    buttonText: "",
    buttonFunction: handleLoginClick,
    imageUrl: "/isometric-financial-robo-assistant-helping-a-man.png",
    left2Right: false
  }
  
  // Hero Feature 3 Details
  const HeroFeature3 = {
    title: "Simple interface",
    description: "Say bye to complex calculation and hello to beautiful data visualisation. We do support complex calculations for you nerdy people too.",
    buttonText: "",
    buttonFunction: handleLoginClick,
    imageUrl: "/isometric-statistical-data-for-financial-analysis.png",
    left2Right: true
  }
  
  // FAQ Details
  const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
    // Create an array of questions and answers using Antd Collapse component
  const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle? ) => [
      {
        key: '1',
        label: 'Do I need to have a finance background to use Finance App?',
        children: <p>No you do not. The application is customised to your experience, you do not need to know it all and use of the features.</p>,
        style: panelStyle,
      },
      {
        key: '2',
        label: 'Do you provide financial advice?',
        children: <p>No because we are not financial instituation, so do not consider the output from financial advice</p>,
        style: panelStyle,
      },
      {
        key: '3',
        label: 'Do you store my financial data?',
        children: <p>That data is encrypted and stored in a cloud platform as we need to do some data calculation but we are happy to remove it if you submit a request</p>,
        style: panelStyle,
      },
    ];
    // Feature Details
    const FeatureDetails = [
      {
        title: "Real-time Analytics",
        description: (
          <div>
            <p>Get insights and analytics in real-time to make informed decisions.</p>
            <ul>
              <li>Live data updates</li>
              <li>Customizable dashboards</li>
              <li>Detailed reports</li>
            </ul>
          </div>
        ),
        icon: "analytics_icon",
        buttonText: "View Analytics",
      },
      {
        title: "Secure Transactions",
        description: (
          <div>
            <p>Experience secure and fast transactions with our advanced security protocols.</p>
            <ul>
              <li>End-to-end encryption</li>
              <li>Multi-factor authentication</li>
              <li>Fraud detection</li>
            </ul>
          </div>
        ),
        icon: "security_icon",
        buttonText: "Secure Now",
      },
      {
        title: "User Management",
        description: (
          <div>
            <p>Manage user accounts and permissions with ease.</p>
            <ul>
              <li>Role-based access control</li>
              <li>Activity logs</li>
              <li>Easy onboarding</li>
            </ul>
          </div>
        ),
        icon: "user_management_icon",
        buttonText: "Manage Users",
      },
    ];

  return (
    <>
      <Hero {...HeroDetails} />
      <Features details={FeatureDetails}/>
      <Hero {...HeroFeature1} />
      <Hero {...HeroFeature2} />
      <Hero {...HeroFeature3} />
      <CTA {...CTADetails}/>
      <FAQ getItems={getItems} panelStyle={panelStyle} />
    </>

  );
};

export default WelcomePage;
