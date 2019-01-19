import React from "react";
import { Link } from "react-router-dom";

import { Navbar, NavbarLink, NavbarLinkRight, AA } from "./NavbarCss";

const NavBar = props => {
  return (
    <Navbar>
      <NavbarLink href="#">Link</NavbarLink>
      <NavbarLinkRight href="#">登入/註冊</NavbarLinkRight>
      <Link to="/">Home</Link>
      <Link to="/test2">Test2</Link>
    </Navbar>
  );
};

export default NavBar;
