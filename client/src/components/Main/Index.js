import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "首頁"
    };
  }
  render() {
    return <>{this.state.title}</>;
  }
}

export default Index;
