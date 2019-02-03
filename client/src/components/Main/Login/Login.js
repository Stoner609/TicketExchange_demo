import React, { Component } from "react";

import { LoginContainer, LoginRow, LoginCol, LoginV1 } from "./LoginCss";

export class login extends Component {
  componentDidMount() {}

  loginHandler = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ account: "a18010", password: "123" })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        document.cookie = "athenaToken=" + myJson.token;
      });
  };

  render() {
    return (
      <LoginContainer>
        <LoginRow>
          <LoginV1 />
          <LoginCol>第三方</LoginCol>
          <LoginCol>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="password" />
            </div>
            <button onClick={this.loginHandler}>登入</button>
          </LoginCol>
        </LoginRow>
      </LoginContainer>
    );
  }
}

export default login;
