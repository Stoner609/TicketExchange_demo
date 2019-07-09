import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  overflow: hidden;
  background-color: #333;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 14px 20px;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: #ddd;
      color: black;
    }
  }
`;

export default Navbar;
