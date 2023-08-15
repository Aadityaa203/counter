import React from "react";

class AddOne extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Add 1</button>
    );
  }
}

export default AddOne;
