import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  playload:{
    completed: false,
    id: nextTodoId ++,
    text: text
  }
});

export const toggleTodo = (toboBean) => ({
  type: TOGGLE_TODO,
  playload: toboBean
});

export const removeTodo = (toboBean) => ({
  type: REMOVE_TODO,
  playload: toboBean
});