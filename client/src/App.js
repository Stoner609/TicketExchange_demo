import React, { Component } from "react";
import logo from "./logo.svg";
import { AppDiv, AppLogo, AppHeader, AppLink } from "./AppCss";

class App extends Component {
  render() {
    return (
      <AppDiv>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppDiv>
    );
  }
}

export default App;
