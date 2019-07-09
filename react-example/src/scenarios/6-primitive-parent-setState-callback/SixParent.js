import React, { Component } from "react";

import { SixChild } from "./SixChild";

class SixParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetForm: false
    };
  }

  handleResetFormClick = () => {
    this.setState(
      {
        resetForm: true
      },
      () => {
        this.setState({ resetForm: false });
      }
    );
  };

  render() {
    return (
      <>
        <SixChild resetForm={this.state.resetForm} />
        <button onClick={this.handleResetFormClick}>reset form</button>
      </>
    );
  }
}

export { SixParent };
