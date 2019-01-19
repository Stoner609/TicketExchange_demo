import React from "react";

import { WrapDiv } from "./WrapCss";
import Side from "../Side/Side";
import Main from "../Main/Main";

const Wrap = props => {
  return (
    <WrapDiv>
      <Side />
      <Main />
    </WrapDiv>
  );
};

export default Wrap;
