import React, { useEffect } from 'react';
import logo from './others/logo.svg';
import './99 - others/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './00 - screens/router';
import axios from 'axios';
import { AppAPIList } from './05 - constants/app';
import useAuth from './02 - hook/authticate';

function App() {
    
    //   // Get account details
    //   useEffect(() => {
    //     // Authentication
    //     axios.get(AppAPIList.Account)
    //         .then(response => {
    //             console.log(response)
    //             //TODO check token in local storage 
    //             //TODO add token into local storage
    //             //TODO refresh token if needed
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
