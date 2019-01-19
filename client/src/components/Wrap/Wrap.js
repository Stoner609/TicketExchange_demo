import React from "react";
import { Route } from "react-router-dom";

import Index from "../Main/Index";
import Login from "../Main/Login";
import { WrapDiv } from "./WrapCss";

const Wrap = props => {
  console.log(props)
  return (
    <WrapDiv>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
    </WrapDiv>
  );
};

export default Wrap;
