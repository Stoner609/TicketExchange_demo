import React, { Component, Fragment } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "首頁"
    };
  }
  render() {
    return <Fragment>{this.state.title}</Fragment>;
  }
}

export default Index;
