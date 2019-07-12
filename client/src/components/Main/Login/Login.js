import React, { Component } from "react";
import axios from "axios";
import { LoginContainer, LoginRow, LoginCol, LoginV1 } from "./LoginCss";

class login extends Component {
  state = {
    userToken: null,
    aa: {
      name: "123"
    },
    account: "",
    password: ""
  };

  componentDidMount() {}

  loginHandler = () => {
    axios
      .post("http://localhost:3001/login", {
        account: this.state.account,
        password: this.state.password
      })
      .then(res => {
        const data = res.data;
        const successState = data.success;
        const getData = data.data;

        if (successState) {
          let token = getData.token;
          this.setState(prevState => ({
            userToken: token,
            aa: {
              ...prevState.aa,
              name: 321
            }
          }));

          document.cookie = "athenaToken=" + token;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeHandler = e => {
    let name = e.target.name;
    let txt = e.target.value;
    this.setState(prevState => ({
      [name]: txt
    }));
  };

  render() {
    return (
      <LoginContainer>
        <LoginRow>
          <LoginV1 />
          <LoginCol>第三方</LoginCol>
          <LoginCol>
            <div>
              <input
                type="text"
                name="account"
                value={this.state.account}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
            </div>
            <button onClick={this.loginHandler}>登入</button>
          </LoginCol>
        </LoginRow>
      </LoginContainer>
    );
  }
}

export default login;
