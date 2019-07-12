import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Haeder from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Wrap from "../components/Wrap/Wrap";
import Footer from "../components/Footer/Footer";

import { AppDiv } from "./AppCss";

class App extends Component {
  componentDidMount() {
    // 認養資訊
    // axios
    //   .get("http://localhost:3001/user", {
    //     headers: {
    //       Authorization: "Bearer " + this.C("athenaToken")
    //     }
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
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
