import React, { useEffect, createContext, useState, ReactNode, FC } from "react";
import {
  Outlet,
  useNavigate,
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

/* --------------------------------- Context -------------------------------- */
interface NavigationContextType {
  currentRoute: string;
  navigateTo: (route: string) => void;
}
interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState<string>('/');

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    navigate(route);
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

/* --------------------------------- Layout --------------------------------- */
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
/* ------------------------------- Main Router ------------------------------ */

const MainRouter = () => {


  return (
    <Router>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<FunctionGroup />} errorElement={<ErrorPage />}>
            <Route index element={<MainPage />} />
            <Route path="/transactions" element={<TransactionListPage />} />
            <Route path="/investment" element={<InvestmentListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </Router>
  );
}



export default MainRouter

