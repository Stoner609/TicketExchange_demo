import React, { Component } from "react";

import {
  LoginContainer,
  LoginRow,
  LoginCol,
  LoginV1
} from "./LoginCss";

export class login extends Component {
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
            <button>登入</button>
          </LoginCol>
        </LoginRow>
      </LoginContainer>
    );
  }
}

export default login;
