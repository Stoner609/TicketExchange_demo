import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

import { AppDiv } from "./AppCss";

import Haeder from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Wrap from "../components/Wrap/Wrap";
import Footer from "../components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  // 新的方法，接收 nextProps 和 prevState
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.value !== nextProps.value) {
  //     return {
  //       result: nextProps.value * nextProps.value,
  //       value: nextProps.value
  //     };
  //   }
  //   return null;
  // }

  componentDidMount() {
    // 認養資訊
    

    axios
      .get("http://localhost:3000/user", {
        headers: {
          Authorization: "Bearer " + this.C("athenaToken")
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  C(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }

  render() {
    return (
      <Router>
        <AppDiv>
          <Haeder />
          <Navbar />
          <Wrap />
          <Footer />
        </AppDiv>
      </Router>
    );
  }
}

export default App;
