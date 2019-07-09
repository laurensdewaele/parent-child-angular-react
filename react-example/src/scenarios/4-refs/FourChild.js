import React, { Component } from 'react';

class FourChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}
export { FourChild };
