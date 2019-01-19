import React from "react";
import { Route } from "react-router-dom";

import Test from "./test";
import Test2 from "./test2";
import { MainDiv } from "./MainCss";

const Main = props => {
  return (
    <MainDiv>
      <Route exact path="/" component={Test} />
      <Route path="/test2" component={Test2} />
    </MainDiv>
  );
};

export default Main;
