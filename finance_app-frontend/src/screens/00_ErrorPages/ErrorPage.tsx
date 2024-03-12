import React from "react";
import { Outlet, useRouteError } from "react-router-dom";
import UserInterface from "../interfaces";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import { Content } from "antd/es/layout/layout";
import SiteFooter from "../../components/Footer";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Layout>
      <NavBar />
      <Content>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </Content>
      <SiteFooter />
    </Layout>

  );
}


export default ErrorPage