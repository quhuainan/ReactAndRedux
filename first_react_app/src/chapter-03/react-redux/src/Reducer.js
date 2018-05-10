import * as ActionTypes from "./ActionTypes.js";

export default (state, action) => {
  const { counterCaption } = action;
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, [counterCaption]: state[counterCaption] + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, [counterCaption]: state[counterCaption] - 1 };
    case ActionTypes.CLEAN:
      return { ...state, First: 0, Second: 0, Third: 0 };
    default:
      return state;
  }
};
