import React, { useState } from "react";
import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom";
import './styles.css';
import { Header } from "antd/es/layout/layout";
import { navList } from "../05 - constants/app";
import { Button, Col, Drawer, Flex, Menu, Row } from "antd";
import useAuth from "../02 - hook/authticate";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Sider from "antd/es/layout/Sider";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1'
  },
  {
    key: '2',
    icon: <DesktopOutlined />, 
    label: 'Option 2'
  },
  {
    key: '3',
    icon: <ContainerOutlined />, 
    label: 'Option 3'
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];



export default function NavBar() {
  //const error: any = useRouteError();
  //console.error(error); 
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  /* -------------------------------- Function -------------------------------- */

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  /* -------------------------------- Components ------------------------------- */
  const UserLogin = () => {
    // if there is user display user email and hamburger menu
    if (user) return <Flex style={{ height: "100%", padding: 0 }} align="left" gap="large" justify="space-between">
      <div style={{ padding: 0, width: "100%", alignContent: "center" }}>Welcome {user.email}</div>
      <Button children="Sign out" onClick={
        () => {
          logout()
          navigate('/')
        }
      } />
    </Flex>
    return (
      <Flex style={{
        display: 'flex', // Added for Flexbox
        alignItems: 'center', // Vertically center the content
        justifyContent: 'center', // Horizontally center the content
        height: 50,
        marginBottom: 15
      }} justify="space-between" >
        <Button style={{ margin: 7 }} children="Sign In" onClick={
          () => navigate('/register')
        } />
        <Button style={{ background: "transparent", border: 0, color: "white" }} children="Register" onClick={
          () => navigate('/login')
        } />
      </Flex>
    )
  }

  /* ------------------------------- Main Render ------------------------------ */
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="50"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: 'auto',
        height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0
      }} className="navbar">
      {/* <Flex style={{ padding: 0, margin: 0, display: "flex", alignItems: "center" }} justify="space-between"  >
        <Flex justify="center" style={{ marginTop: 5 }}>
          <Link to={'/'}>
            <img style={{ height: 60, padding: 5 }} src="/2.jpg" />
          </Link>
          {navList.map((route, i) => (
            <Link style={{
              display: 'flex', // Added for Flexbox
              alignItems: 'center', // Vertically center the content
              justifyContent: 'center', // Horizontally center the content
              height: 50, margin: 7, alignContent: "center", fontSize: 16, color: "white"
            }} key={i} to={route.route}>{route.title}</Link>)
          )}
        </Flex>
          <UserLogin />
      </Flex> */}
      <div style={{ width: 256 }}>
        <Link to={'/'}>
          <img style={{ height: 60, padding: 5 }} src="/2.jpg" />
        </Link>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          style={{ width: collapsed? 60: 256}}
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      {/* <Row align="stretch" >
        <Col xs={20} sm={18} md={16} lg={12} xl={8}>
          <Link to={'/'}>
            <img style={{ height: 60, padding: 5 }} src="/2.jpg" />
          </Link>
        </Col>ki
        <Col xs={4} sm={6} md={8} lg={12} xl={16} style={{ textAlign: 'right' }}>
           Hamburger Menu for Mobile View 

        </Col>
      </Row> */}

    </Sider>
  );
}
