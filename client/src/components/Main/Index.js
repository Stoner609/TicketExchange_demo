import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '首頁'
    }
  }
  render() {
    return <div>{this.state.title}</div>;
  }
}

export default Index;
