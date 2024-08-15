import { Layout } from "antd";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { Content } from "antd/es/layout/layout";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SiteFooter from "../components/Footer";
import { ContextProvider } from "./router";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import WelcomePage from "./00_Welcome/WelcomePage";
import LoginPage from "./00_Login/LoginPage";
import RegisterPage from "./00_Register/RegisterPage";
import PrivacyPage from "./00_Welcome/PrivacyPage";
import AboutPage from "./00_Welcome/AboutPage";

const PublicGroup = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <Content >
        <Outlet />
      </Content>
      <SiteFooter />
    </Layout>
  )
}

export default function PublicRouter() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<PublicGroup />} errorElement={<ErrorPage />}>
            <Route index element={<WelcomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </ContextProvider>
    </Router>
  );
}