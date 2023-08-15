import React, { Component } from "react";
import AddOne from "./components/AddOne";
import SubtractOne from "./components/SubtractOne";
import ResetBtn from "./components/ResetBtn";
import AddInputNum from "./components/AddInputNum";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  subtractOne = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetNumber = () => {
    this.setState({
      count: 0,
    });
  };

  addInputNum = (number) => {
    let value = parseInt(number);
    this.setState({
      count: this.state.count + value,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>React Counter: {this.state.count}</h1>
        <div className="buttons">
          <AddOne onClick={this.addOne} />
          <SubtractOne onClick={this.subtractOne} />
        </div>
        <div>
          <AddInputNum AddInputNum={this.addInputNum} />
        </div>
        <div>
          <ResetBtn onClick={this.resetNumber} />
        </div>
      </div>
    );
  }
}

export default App;
