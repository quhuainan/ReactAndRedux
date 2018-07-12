import React from "react";
import TodoItem from "./todoItem";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions.js";
import { FilterTypes } from "../../constants";
const TodoList = ({ todos = [], onToggleTodo, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item)}
          onRemove={() => onRemoveTodo(item)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  };
};
const selectVisibleTodos = (todos, filter) => {
  console.log("todo", todos);
  console.log("filer", filter);
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: todo => {
      dispatch(toggleTodo(todo));
    },
    onRemoveTodo: todo => {
      dispatch(removeTodo(todo));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
