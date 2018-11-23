import React from "react"
import { hot } from "react-hot-loader";
import styles from "./main.css";
import styled from "react-emotion";
import { css } from "emotion";


const Fancy = styled("h1")`
  color: ${props => (props.wild ? "hotpink" : "deepskyblue")}
`





const red = "#f00";

const className = css`
  color: ${red};
  font-size: 9em;
`

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
    const isWild = this.state.count % 2 === 0;
    return (
      <div className={styles.counter} onClick={this.increment.bind(this)}>
        <span className={className}>Count: {this.state.count}</span>
        <Fancy wild={isWild}>This is fancy!</Fancy>

      </div>
    );
  }
}

export default hot(module)(Counter);