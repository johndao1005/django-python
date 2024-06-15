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
  HomeOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Sider from "antd/es/layout/Sider";


type MenuItem = Required<MenuProps>['items'][number];




export default function NavBar() {
  //const error: any = useRouteError();
  //console.error(error); 
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    {
      key: '1',
      icon: <HomeOutlined />,
      onClick: () => navigate('/'),
      label: 'Home'
    },
    {
      key: '2',
      icon: <PieChartOutlined />,
      onClick: () => navigate('/investment'),
      label: 'Porfolio'
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      onClick: () => navigate('/transactions'),
      label: 'Transactions'
    },
    // {
    //   key: 'sub1',
    //   label: 'Navigation One',
    //   icon: <MailOutlined />,
    //   children: [
    //     { key: '5', label: 'Option 5' },
    //     { key: '6', label: 'Option 6' },
    //     { key: '7', label: 'Option 7' },
    //     { key: '8', label: 'Option 8' },
    //   ],
    // },
    // {
    //   key: 'sub2',
    //   label: 'Navigation Two',
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     { key: '9', label: 'Option 9' ,icon: <MailOutlined />,},
    //     { key: '10', label: 'Option 10' },
    //     {
    //       key: 'sub3',
    //       label: 'Submenu',
    //       children: [
    //         { key: '11', label: 'Option 11' },
    //         { key: '12', label: 'Option 12' },
    //       ],
    //     },
    //   ],
    // },
  ];
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
      //collapsible
      //onCollapse={(value) => setCollapsed(value)}
      collapsed={collapsed}
      className="navbar"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0, top: 0, bottom: 0,
        backgroundColor: "black"
      }}>
      <Flex vertical style={{ width: collapsed ? 50 : 197 }}>
        <Link to={'/'}>
          <img style={{ height: 50, padding: 5 }} src="/2.jpg" />
        </Link>
        <Button type="primary" onClick={toggleCollapsed}
          style={{ margin: 5 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          style={{ width: collapsed ? 50 : 197 }}
          inlineCollapsed={collapsed}
          items={items.map((item) => item)}
        />
      </Flex>
    </Sider>
  );
}
