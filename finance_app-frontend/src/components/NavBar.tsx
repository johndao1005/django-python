import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './styles.css';
import { inherits } from "util";
import { Header } from "antd/es/layout/layout";
import { navList } from "../constants/app";

export default function NavBar() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Header  className="navbar">
      <Link to={`/`}>
        <img style={{ height: "50px" }} src="https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg" />
      </Link>
      {navList.map((route, i) => (
        <Link  key={i} to={route.route}>{route.title}</Link>)
      )}
    </Header>
  );
}
