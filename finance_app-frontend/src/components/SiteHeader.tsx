import React, { useState } from "react";
import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom";
import './styles.css';
import { Header } from "antd/es/layout/layout";
import { navList } from "../constants/app";
import { Button, Image, Menu, } from "antd";
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

export default function SiteHeader({ props }: React.PropsWithChildren<any>) {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      onClick: () => navigate('/privacy'),
      label: 'Privacy'
    },
    // {
    //   key: '2',
    //   icon: <ContainerOutlined />,
    //   onClick: () => navigate('/terms'),
    //   label: 'Terms'
    // },
    {
      key: '3',
      icon: <ContainerOutlined />,
      onClick: () => navigate('/about'),
      label: 'About'
    },

  ];

  /* ------------------------------- Main Render ------------------------------ */
  return (

    <Header style={{ display: 'flex', maxHeight: 50, backgroundColor: "black" }}>
      <a onClick={() => navigate("/")}>
        <img style={{ height: 50, padding: 5, margin: "auto" }} src="/2.jpg" />
      </a>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ marginRight: 10, height: 50, flex: 1, display: 'flex', justifyContent: 'flex-end', backgroundColor: "black", textDecoration: "none", color: "white", fontSize: 11 }}
      />
      <Button style={{ margin: "auto", justifyContent: 'flex-end', backgroundColor: "black", textDecoration: "none", color: "white", fontSize: 11 }} onClick={() => navigate('/login')}>Login</Button>
    </Header>
  );
}
