import React, { useEffect } from "react";
import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import WelcomePage from "./00_Welcome/Welcome";
import MainPage from "./01_Main/MainPage";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/Footer";
import TransactionListPage from "./02_Transactions/TransactionListPage";
import InvestmentListPage from "./03_Investments/InvestmentListPage";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";

/*ANCHOR main function group of pages for the app, template for other group like admin or welcome*/
const FunctionGroup = () => {

    // Get account details
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/accounts/')
            .then(response => {
                console.log(response)
                //TODO check token in local storage 
                
                //TODO add token into local storage
                //TODO refresh token if needed
                
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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
        //element:<WelcomePage/>
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

