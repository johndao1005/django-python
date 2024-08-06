import React, { useState } from "react";
import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom";
import './styles.css';
import { Header } from "antd/es/layout/layout";
import { navList } from "../constants/app";
import {  Menu,  } from "antd";
import {
  ContainerOutlined,
  PieChartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { auth, useAppDispatch, useAppSelector } from '../hook/initial';
import type { MenuProps } from 'antd';
import { RootState } from "../store";
import { firebaseLogout } from "../store/login.action";
import { AuthState } from "../constants/interfaces";

type MenuItem = Required<MenuProps>['items'][number];

export default function SiteHeader({props}:React.PropsWithChildren<any>) {
  const dispatch = useAppDispatch();
  const {user,loading,error} = useAppSelector((state) => state.auth as AuthState);
  const navigate = useNavigate();


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

  const handleReadMoreClick = () => {
    navigate('/about');
  };

  const handlePrivacyClick = () => {
    navigate('/privacy');
  };

  /* ------------------------------- Main Render ------------------------------ */
  return (

    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" onClick={handleReadMoreClick}>Read More</Menu.Item>
      <Menu.Item key="2" onClick={handlePrivacyClick}>Privacy</Menu.Item>
    </Menu>
  </Header>
  );
}
