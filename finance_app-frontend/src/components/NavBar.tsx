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
import { firebaseLogout } from "../store/login.action";
import { AuthState } from "../constants/interfaces";

type MenuItem = Required<MenuProps>['items'][number];

export default function NavBar({props}:React.PropsWithChildren<any>) {
  const dispatch = useAppDispatch();
  const {user,loading,error} = useAppSelector((state) => state.auth as AuthState);
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: '1',
      icon: <HomeOutlined  />,
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
            dispatch(firebaseLogout());
            navigate('/');
          }
        },
      ],
    },
  ];

  const publicNav: MenuItem[] = [
    {
      key: '1',
      icon: <HomeOutlined  />,
      onClick: () => navigate('/'),
      label: 'Home'
    },
    {
      key: '2',
      icon: <PieChartOutlined />,
      onClick: () => navigate('/privacy'),
      label: 'Privacy'
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      onClick: () => navigate('/terms'),
      label: 'Terms'
    },
    {
      key: '4',
      icon: <ContainerOutlined />,
      onClick: () => navigate('/about'),
      label: 'About'
    },
    
  ];
  /* -------------------------------- Function -------------------------------- */



  /* -------------------------------- Components ------------------------------- */
  const UserLogin = () => {
    // if there is user display user email and hamburger menu
    if (user) return <Flex style={{ height: "100%", padding: 0 }} align="left" gap="large" justify="space-between">
      <div style={{ padding: 0, width: "100%", alignContent: "center" }}>Welcome {user.email}</div>
      <Button children="Sign out" onClick={
        () => {
          dispatch(firebaseLogout());
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
        items={(props?items:publicNav).map((item) => item)}
      />

    </Flex>
  );
}
