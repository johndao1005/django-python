import React from "react";
import { Link, useRouteError } from "react-router-dom";
import style from './style.module.css';
import { Footer } from "antd/es/layout/layout";
import { navList } from '../05 - constants/app';

export default function SiteFooter() {
  //const error: any = useRouteError();
  //console.error(error);

  return (
    <Footer className="footer">
      <div style={{ paddingTop: 10 }}>@ 2024 FIREDay All rights reserved</div>
      {navList.map((route, i) => (
        <Link key={i} to={route.route}>{route.title}</Link>)
      )}

      <div>

      </div>
    </Footer>
  );
}

