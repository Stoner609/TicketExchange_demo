import React from "react";
import { Navbar, NavbarLink, NavbarLinkRight } from "./NavbarCss";

const NavBar = props => {
  return (
    <Navbar>
        <NavbarLink href="#">Link</NavbarLink>
        <NavbarLinkRight href="#">Link</NavbarLinkRight>
    </Navbar>
  );
};

export default NavBar;
