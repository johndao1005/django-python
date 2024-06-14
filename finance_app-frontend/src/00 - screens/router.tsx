import React, { useEffect } from "react";
import {
  Outlet,
} from "react-router-dom";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import WelcomePage from "./00_Welcome/Welcome";
import MainPage from "./01_Main/MainPage";
import NavBar from "../02 - components/NavBar";
import SiteFooter from "../02 - components/Footer";
import TransactionListPage from "./02_Transactions/TransactionListPage";
import InvestmentListPage from "./03_Investments/InvestmentListPage";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./protectedRoute";
import LoginPage from "./00_Login/LoginPage";
import RegisterPage from "./00_Register/RegisterPage";
import Sider from "antd/es/layout/Sider";


/*ANCHOR main function group of pages for the app, template for other group like admin or welcome*/
const FunctionGroup = () => {
  return (
    <Layout hasSider>
      <NavBar />
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <SiteFooter />
      </Layout>
    </Layout>
  )
}

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FunctionGroup />} errorElement={<ErrorPage />}>
          <Route index element={<MainPage />} />
          <Route path="/transactions" element={<TransactionListPage />} />
          <Route path="/investment" element={<InvestmentListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}



export default MainRouter

