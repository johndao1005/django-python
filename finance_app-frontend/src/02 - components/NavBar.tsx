import React from "react";
import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom";
import './styles.css';
import { inherits } from "util";
import { Header } from "antd/es/layout/layout";
import { navList } from "../05 - constants/app";
import { Button, Flex } from "antd";
import useAuth from "../02 - hook/authticate";
import { log } from "console";

export default function NavBar() {
  //const error: any = useRouteError();
  //console.error(error); 
  const navigate = useNavigate();
  const { user,login } = useAuth();
  const signInOnClick = () => {
    console.log(user)
    login("john@gmail.com","123asd!A").then(
      (response) => console.log(response)
    ).catch((error) => {
      console.error(error);
    });
  }
  return (
    <Header style={{ padding: "1%" }} className="navbar">
      <Flex style={{ padding: 0, width: "100%" }} align="center" gap="large" justify="space-between">
        <div>
          <Link to={'/'}>
            <img style={{ height: "30px" }} src="https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg" />
          </Link>
          {navList.map((route, i) => (
            <Link key={i} to={route.route}>{route.title}</Link>)
          )}
        </div>
        <div>
          <Link to={'/'}> Sign In</Link>
          <Button children="Signup" onClick={
            () => signInOnClick()
            } />
        </div>
      </Flex>


    </Header>
  );
}
