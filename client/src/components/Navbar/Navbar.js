import React from "react";
import Navbar from "./NavbarCss";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <Navbar>
      <Link to="/">首頁</Link>
      <Link to="/login">登入/註冊</Link>
    </Navbar>
  );
};

export default NavBar;
