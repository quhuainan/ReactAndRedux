import AppDispatcher from "./AppDispatcher";
import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({ type: ActionTypes.INCREMENT, counterCaption: counterCaption });
}

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({ type: ActionTypes.DECREMENT, counterCaption: counterCaption })
}