import { SET_FILTER } from "./actionTypes";
import { FilterTypes } from "../../constants";

export default (state=FilterTypes.ALL, action) => {
  console.log("action", action);
  console.log("state", state);

  switch (action.type) {
    case SET_FILTER: {
      return action.playload;
    }
    default:
      return state;
  }

  return state;
};
