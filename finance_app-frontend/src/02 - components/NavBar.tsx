import React from "react";
import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom";
import './styles.css';
import { Header } from "antd/es/layout/layout";
import { navList } from "../05 - constants/app";
import { Button, Flex } from "antd";
import useAuth from "../02 - hook/authticate";



export default function NavBar() {
  //const error: any = useRouteError();
  //console.error(error); 
  const navigate = useNavigate();
  const { user,  logout } = useAuth();


  const UserLogin = () => {
    // if there is user display user email and hamburger menu
    if (user) return <Flex style={{ height: "100%", padding: 0 }} align="left" gap="large" justify="space-between">
      <div style={{ padding: 0, width: "100%", alignContent: "center" }}>Welcome {user.email}</div>
      <Button children="Sign out" onClick={
        () => {
          logout()
          navigate('/')
        }
      } />
    </Flex>
    return <Flex style={{ height: "100%", padding: 0 }} align="left" gap="middle" justify="space-between">
      <Button children="Sign In" onClick={
        () => navigate('/login')
      } />
      <Link style={{ padding: 0, width: "100%", alignContent: "center" }} to={'/register'}> Sign Up</Link>
    </Flex>
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
        <UserLogin />
      </Flex>


    </Header>
  );
}
