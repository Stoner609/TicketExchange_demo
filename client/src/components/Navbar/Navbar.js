import React from "react";
import { Navbar, NavbarLink, NavbarLinkRight } from "./NavbarCss";

const NavBar = props => {
  return (
    <Navbar>
      <NavbarLink to="/">首頁</NavbarLink>
      <NavbarLinkRight to="/login">登入/註冊</NavbarLinkRight>
    </Navbar>
  );
};

export default NavBar;
