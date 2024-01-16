import React from "react";
import { Link, useRouteError } from "react-router-dom";
import style from './style.module.css';
import { Footer } from "antd/es/layout/layout";

export default function SiteFooter() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Footer className="footer">
      <Link to={`/`}>Financial Management App</Link>
      <Link to={`/transactions`}>Transaction List</Link>
      <Link to={`/transactions`}>Investment</Link>
      <Link to={`/transactions`}>Transaction List</Link>
    </Footer>
  );
}

