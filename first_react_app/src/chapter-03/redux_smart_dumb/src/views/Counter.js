import React, { Component, PropTypes } from "react";

import store from "../Store.js";
import * as Actions from "../Actions.js";

const buttonStyle = {
  margin: "10px"
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState();
  }
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption));
  }
  onChange() {
    this.setState(this.getOwnState());
  }
  getOwnState() {
    return { value: store.getState()[this.props.caption] };
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }
  render() {
    const value = this.state.value;
    const { caption } = this.props;

    return (
      <CounterDumb
        caption={caption}
        value={value}
        onDecrement={this.onDecrement}
        onIncrement={this.onIncrement}
      />
    );
  }
}

function CounterDumb(props) {
  const { caption, value, onIncrement, onDecrement } = props;

  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>
        +
      </button>
      <button style={buttonStyle} onClick={onDecrement}>
        -
      </button>
      <span>
        {caption} count: {value}
      </span>
    </div>
  );
}
export default Counter;
