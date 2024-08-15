import React from "react";
import { Link, useRouteError } from "react-router-dom";
import style from './style.module.css';
import { Footer } from "antd/es/layout/layout";
import { navList } from '../constants/app';

export default function SiteFooter() {
  //const error: any = useRouteError();
  //console.error(error);

  return (
    <Footer style={{bottom:0, justifyContent: "space-between", background: "black", paddingLeft: 70, alignItems: "center", display: "flex" }} className="footer">
      <div style={{ paddingTop: 10, color: "white" }}>@ 2024 FIREDay All rights reserved, Icons by <Link style={{padding :0 ,margin: 0}} to="https://icons8.com/">Icons8</Link></div>
      <div>
        {navList.map((route, i) => (
          <Link style={{ color: "white" }} key={i} to={route.route}>{route.title}</Link>)
        )}
      </div>
    </Footer>
  );
}

