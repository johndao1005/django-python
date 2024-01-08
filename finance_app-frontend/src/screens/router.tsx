import React from "react";
import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "./00_ErrorPages/ErrorPage";
import WelcomePage from "./00_Welcome/Welcome";
import MainPage from "./01_Main/MainPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TransactionListPage from "./02_Transactions/TransactionListPage";
import InvestmentListPage from "./03_Investments/InvestmentListPage";

const FunctionGroup = () =>{
    
    return (
        <>
            <NavBar/>
            <Outlet />
            <Footer/>
        </>
    )
}


const WelcomeGroup = () =>{
    
    return (
        <>
    
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        //element:<WelcomePage/>
        element:<FunctionGroup /> ,
        errorElement: <ErrorPage />,
        children : [
            {
                path: "",
                element:<MainPage />
            },
            {
                path: "/transactions",
                element: <TransactionListPage/>,
            },
            {
                path: "/investment",
                element: <InvestmentListPage/>,
            },
        ]
    },
  
]);




export default router

