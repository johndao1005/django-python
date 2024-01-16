import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './styles.css';
import { inherits } from "util";
import { Header } from "antd/es/layout/layout";

export default function NavBar() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Header hasSider={true} className="navbar">
      <Link to={`/`}>
        <img style={{ height: "50px" }} src="https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg" />
      </Link>
      <Link to={`/`}>Nav</Link>
      <Link to={`/transactions`}>Transaction List</Link>
      <Link to={`/investment`}>Investment</Link>
      <Link to={`/transactions`}>Transaction List</Link>
    </Header>
  );
}
