import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {FilterTypes} from "./constants";
import { reducer as todoReducer } from "./todos";
import { reducer as filterReducer } from "./filter";
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];

const storeEnhancers = compose(applyMiddleware(...middlewares));
console.log("reducer", todoReducer);

export default createStore(
  reducer,
  { todos: [], filter: FilterTypes.ALL },
  storeEnhancers
);
