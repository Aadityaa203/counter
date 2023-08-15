import React from "react";

class SubtractOne extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Subtract 1</button>;
  }
}

export default SubtractOne;
