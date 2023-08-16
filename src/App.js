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
        <h1 className="h1">React Counter: {this.state.count}</h1>
        <div className="buttons">
          <div className="a1">
            <AddOne onClick={this.addOne} />
          </div>
          <div className="a2">
            <SubtractOne onClick={this.subtractOne} />
          </div>
        </div>
        <div className="input">
          <AddInputNum AddInputNum={this.addInputNum} />
        </div>
        <div className="resetBtn">
          <ResetBtn onClick={this.resetNumber} />
        </div>
      </div>
    );
  }
}

export default App;
