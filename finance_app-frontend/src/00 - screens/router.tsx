import React, { useEffect } from "react";
import {
    Outlet,
    createBrowserRouter
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
import { Route, Routes } from 'react-router-dom';

/*ANCHOR main function group of pages for the app, template for other group like admin or welcome*/
const FunctionGroup = () => {
    return (
        <Layout>
            <NavBar />
            <Content>
                <Outlet />
            </Content>
            <SiteFooter />
        </Layout>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <FunctionGroup />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/transactions",
                element: <TransactionListPage />,
            },
            {
                path: "/investment",
                element: <InvestmentListPage />,
            },
        ]
    },

]);



export default router

