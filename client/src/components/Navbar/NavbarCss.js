import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  overflow: hidden;
  background-color: #333;
`;

const NavbarLink = styled.a`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  :hover {
    background-color: #ddd;
    color: black;
  }
`;

const NavbarLinkRight = styled(NavbarLink)`
  float: right;
`;

export { Navbar, NavbarLink, NavbarLinkRight };
