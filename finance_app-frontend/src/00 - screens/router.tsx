import React, { useEffect, createContext, useState, ReactNode, FC } from "react";
import {
  Outlet,
  useNavigate,
} from "react-router-dom";
import MainPage from "./01_Main/MainPage";
import NavBar from "../02 - components/NavBar";
import SiteFooter from "../02 - components/Footer";
import TransactionListPage from "./02_Transactions/TransactionListPage";
import InvestmentListPage from "./03_Investments/InvestmentListPage";
import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./protectedRoute";
import LoginPage from "./00_Login/LoginPage";
import RegisterPage from "./00_Register/RegisterPage";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import Sider from "antd/es/layout/Sider";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
/* --------------------------------- Context -------------------------------- */
interface ContextType {
  currentRoute: string;
  navigateTo: (route: string) => void;
}
interface ContextProviderProps {
  children: ReactNode;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    navigate(route);
  };

  return (
    <Context.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </Context.Provider>
  );
};

/* --------------------------------- Layout --------------------------------- */
/*ANCHOR main function group of pages for the app, template for other group like admin or welcome*/
const FunctionGroup = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout hasSider>

      <Sider
        breakpoint="lg"
        collapsedWidth="50"
        onBreakpoint={(broken) => {
          setMobileView(broken);
        }}
        //collapsible={mobileView}
        onCollapse={(value) => { setCollapsed(value); console.log("collasped " + value) }}
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0, top: 0, bottom: 0,
          zIndex: 1000,
          backgroundColor: "black",
          width: collapsed ? 80 : 250,
        }}>

        <NavBar />
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            position: 'fixed',
            left: 0, bottom: 0,
            width: collapsed ? 50 : 200, borderRadius: 0
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Sider>
      <Layout style={{ marginLeft :  collapsed ? 50 : 200,}}>
        <Content >
          <Outlet />
        </Content>
        <SiteFooter  />
      </Layout>
    </Layout>
  )
}
/* ------------------------------- Main Router ------------------------------ */

const MainRouter = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<FunctionGroup />} errorElement={<ErrorPage />}>
            <Route index element={<MainPage />} />
            <Route path="/transactions" element={<TransactionListPage />} />
            <Route path="/investment" element={<InvestmentListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
          </Route>
        </Routes>
      </ContextProvider>
    </Router>
  );
}



export default MainRouter

