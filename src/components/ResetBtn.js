import React from "react";

class ResetBtn extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Reset Number</button>;
  }
}

export default ResetBtn;
