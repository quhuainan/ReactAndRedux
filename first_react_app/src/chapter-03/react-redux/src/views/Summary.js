import React, { Component } from "react";

import store from "../Store.js";
import * as Actions from "../Actions.js";

function mapStatetoProps(state, ownProps) {
  getOwnState = () => {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return sum;
  };
  return { sum: getOwnState };
}

function dispatchToProps(state, ownProps) {
  return { clean: Actions.clean() };
}

function Summary(props) {
  return (
    <div>
      <text>Total Count: {props.sum}</text>
      <button style={{ margin: 24 }} onClick={props.clean}>
        归零
      </button>
    </div>
  );
}

export default connect(mapStatetoProps, dispatchToProps)(Summary);
