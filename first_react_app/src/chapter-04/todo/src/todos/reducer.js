import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes.js";

export default (state=[], acticon) => {
  
  switch (acticon.type) {
    case ADD_TODO:
      return [acticon.playload, ...state];
    case TOGGLE_TODO:
      return state.map((todoItem)=>{
          if (todoItem.id === acticon.playload.id) {
              return {...todoItem, completed : !todoItem.completed}
          }else{
              return todoItem
          }
      })
    case REMOVE_TODO:
      return state.filter((todoItem)=>{
          return todoItem.id !== acticon.playload.id;
      })
    default:
      return state
  }
};
