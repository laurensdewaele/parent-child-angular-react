import React, { PureComponent } from 'react';

class TwoChild extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.resetForm !== nextProps.resetForm) {
      this.resetForm();
    }
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  resetForm = () => {
    this.setState({ value: ' ' });
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

export { TwoChild };
