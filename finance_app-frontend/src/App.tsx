import React from 'react';
import logo from './others/logo.svg';
import './others/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './screens/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
