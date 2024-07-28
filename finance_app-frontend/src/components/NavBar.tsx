import React, { useState } from "react";
import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom";
import './styles.css';
import { Header } from "antd/es/layout/layout";
import { navList } from "../constants/app";
import { Button, Col, Drawer, Flex, Menu, Row } from "antd";
import {
  ContainerOutlined,
  LogoutOutlined,
  SettingOutlined,
  MessageOutlined,
  UserOutlined,
  PieChartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { auth, useAppDispatch, useAppSelector } from '../hook/initial';
import type { MenuProps } from 'antd';
import { RootState } from "../store";
import { clearUser } from "../store/login.action";

type MenuItem = Required<MenuProps>['items'][number];

export default function NavBar() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

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
    {
      key: 'sub1',
      label: 'User',
      icon: <UserOutlined />,
      children: [
        {
          key: '5', label: 'User Details',
          icon: <UserOutlined />
        },
        {
          key: '6', label: 'Communication',
          icon: <MessageOutlined />
        },
        {
          key: '7', label: 'Settings',
          icon: <SettingOutlined />
        },
        {
          key: '8', label: 'Logout',
          icon: <LogoutOutlined />,
          onClick: () => {
            dispatch(clearUser());
            navigate('/');
          }
        },
      ],
    },
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



  /* -------------------------------- Components ------------------------------- */
  const UserLogin = () => {
    // if there is user display user email and hamburger menu
    if (authState.user) return <Flex style={{ height: "100%", padding: 0 }} align="left" gap="large" justify="space-between">
      <div style={{ padding: 0, width: "100%", alignContent: "center" }}>Welcome {authState.user.email}</div>
      <Button children="Sign out" onClick={
        () => {
          dispatch(clearUser());
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

    <Flex vertical >
      <Link to={'/'}>
        <img style={{ height: 50, padding: 5 }} src="/2.jpg" />
      </Link>

      <Menu 
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={items.map((item) => item)}
      />

    </Flex>
  );
}
