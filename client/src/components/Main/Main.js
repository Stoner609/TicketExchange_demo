import React from "react";
import { Route } from "react-router-dom";

import { MainDiv } from "./MainCss";

import Index from "./Index";
import Login from "./Login/Login";

const Main = props => {
  return (
    <MainDiv>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
    </MainDiv>
  );
};

export default Main;
