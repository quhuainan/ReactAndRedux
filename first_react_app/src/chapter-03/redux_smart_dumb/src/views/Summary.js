import React, { Component } from "react";

import store from "../Store.js";
import * as Actions from "../Actions.js";
class Summary extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum: sum };
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    const sum = this.state.sum;
    return (
      <SummaryDumb
        sum={sum}
        clean={() => {
          store.dispatch(Actions.clean());
        }}
      />
    );
  }
}

function SummaryDumb(props) {
  return (
    <div>
      <text>Total Count: {props.sum}</text>
      <button style={{ margin: 24 }} onClick={props.clean}>
        归零
      </button>
    </div>
  );
}

export default Summary;
