import React, { Component, createRef } from "react";

import { FourChild } from "./FourChild";

class FourParent extends Component {
  constructor(props) {
    super(props);

    this.childRef = createRef();
  }

  handleResetFormClick = e => {
    this.childRef.current.resetForm();
  };

  render() {
    return (
      <>
        <FourChild ref={this.childRef} />
        <button onClick={this.handleResetFormClick}>reset form</button>
      </>
    );
  }
}
export { FourParent };
