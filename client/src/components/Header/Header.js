import React from "react";
import { HeadDiv, HeadHOne, HeadP } from "./HeaderCss";

const Header = props => {
  return (
    <HeadDiv>
      <HeadHOne>My Website</HeadHOne>
      <HeadP>A website created by me.</HeadP>
    </HeadDiv>
  );
};

export default Header;
