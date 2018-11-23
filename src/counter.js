import React from "react"
import { hot } from "react-hot-loader";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div onClick={this.increment.bind(this)}>
        <span className="hello">Counter: {this.state.count}</span>
      </div>
    );
  }
}

export default hot(module)(Counter);