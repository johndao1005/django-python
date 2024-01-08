import React from "react";
import { Link, useRouteError } from "react-router-dom";
import style from './style.module.css';

export default function Footer() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <nav className="footer">
      <Link to={`/`}>Financial Management App</Link>
      <Link to={`/transactions`}>Transaction List</Link>
      <Link to={`/transactions`}>Investment</Link>
      <Link to={`/transactions`}>Transaction List</Link>
    </nav>
  );
}

