import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>,
        errorElement: <ErrorPage />,
        children : [
            {
                path: "/transactions",
                element: <div>Hello world!</div>,
            },
            {
                path: "/budget",
                element: <div>Hello world!</div>,
            },
            {
                path: "/portfolio",
                element: <div>Hello world!</div>,
            },
        ]
    },
  
]);

export default router

