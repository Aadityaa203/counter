import React, { Component } from "react";

class AddInputNum extends Component {
  state = {
    count: "",
  };

  handleChange = (e) => {
    this.setState({
      count: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddInputNum(this.state.count);
    this.setState({
      count: "",
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.count}
        />
        <button>Submit</button>
      </form>
    );
  }
}
export default AddInputNum;
