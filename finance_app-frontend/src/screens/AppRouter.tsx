import { Button, Layout } from "antd";
import { useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SiteFooter from "../components/Footer";
import { ContextProvider } from "./router";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import Sider from "antd/es/layout/Sider";
import NavBar from "../components/NavBar";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
import MainPage from "./01_Main/MainPage";
import TransactionListPage from "./02_Transactions/TransactionListPage";
import InvestmentListPage from "./03_Investments/InvestmentListPage";
import LoginPage from "./00_Login/LoginPage";
import RegisterPage from "./00_Register/RegisterPage";

  
/* --------------------------------- Layout --------------------------------- */
/*ANCHOR main function group of pages for the app, template for other group like admin or welcome*/
const FunctionGroup = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return (
      <Layout hasSider style={{minHeight:"100vh"}}>
  
        <Sider
          breakpoint="lg"
          collapsedWidth="50"
          onBreakpoint={(broken) => {
            setMobileView(broken);
          }}
          //collapsible={mobileView}
          onCollapse={(value) => { setCollapsed(value);}}
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
        <Layout style={{ marginLeft: collapsed ? 50 : 200, minHeight: "100vh" }}>
          <Content >
            <Outlet />
          </Content>
          <SiteFooter />
        </Layout>
      </Layout>
    )
  }
  
  /* ------------------------------- Main Router ------------------------------ */
  
  const AppRouter = () => {
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

  export default AppRouter;