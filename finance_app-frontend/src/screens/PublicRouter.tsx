import { Layout } from "antd";
import { useState } from "react";
import SiteHeader from "../components/Header";
import { Content } from "antd/es/layout/layout";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SiteFooter from "../components/Footer";
import { ContextProvider } from "./router";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import WelcomePage from "./00_Welcome/WelcomePage";

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
          </Route>
        </Routes>
      </ContextProvider>
    </Router>
  );
}