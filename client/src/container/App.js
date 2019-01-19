import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppDiv } from "./AppCss";

import Haeder from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

class App extends Component {
  componentDidMount() {
    // 認養資訊
    fetch(
      "https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate",
      { method: "get" }
    )
      .then(res => res.json())
      .then(myJson => {
        console.log(myJson);
      });
  }

  render() {
    return (
      <Router>
        <AppDiv>
          <Haeder />
          <Navbar />
          <Main />
          <Footer />
        </AppDiv>
      </Router>
    );
  }
}

export default App;
