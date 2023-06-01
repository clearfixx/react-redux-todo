import { createStore } from "redux";

let todoId = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: ++todoId,
          title: action.title,
          completed: false,
        },
      ];
    }
    case "DELETE_TODO": {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              deleted: true,
            }
          : todo
      );
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};

const store = createStore(todos);

export default store;

export const addTodo = (title) => ({
  type: "ADD_TODO",
  title,
});
export const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  todoId,
});

export const deleteTodo = (todoId) => ({
  type: "DELETE_TODO",
  todoId,
});
