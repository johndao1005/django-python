import React, { useEffect } from 'react';
import logo from './others/logo.svg';
import './others/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './screens/router';
import axios from 'axios';
import { AppAPIList } from './constants/app';

function App() {
      // Get account details
      useEffect(() => {
        // Authentication
        axios.get(AppAPIList.Account)
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
