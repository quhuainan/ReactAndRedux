import React, { Component, PropTypes } from "react";

import store from "../Store.js";
import * as Actions from "../Actions.js";

const buttonStyle = {
  margin: "10px"
};



function mapStateToProps(state, ownProps) {
  return { value: state[ownProps.caption] };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  };
}


function Counter(props) {
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
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
