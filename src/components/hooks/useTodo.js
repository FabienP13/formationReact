import { useReducer } from "react";

function todosReducer(state, action) {
  if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo !== action.payload),
    };
  }

  if (action.type === "TOGGLE_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo === action.payload
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo,
      ),
    };
  }
  if (action.type === "CLEAR_ALL") {
    return {
      ...state,
      todos: state.todos.filter(todo => !todo.checked)
    };
  }
  return state;
}

export function useTodo () {
    const [state, dispatch] = useReducer(todosReducer, {
    showAll: true,
    todos: [
      {
        name: "Faire les courses",
        checked: false,
      },
      {
        name: "Ranger les courses",
        checked: false,
      },
      {
        name: "Manger les courses",
        checked: false,
      },
    ],
  });

  const visibleTodos = state.showAll ? state.todos : state.todos.filter( ( t => !t.checked))

  return {
    visibleTodos: visibleTodos,
    toggleTodo: (todo) => dispatch({type: "TOGGLE_TODO", payload:todo}),
    removeTodo: (todo) => dispatch({type: "REMOVE_TODO", payload:todo}),
    clearAll:(todo) => dispatch({type: "CLEAR_ALL"})

  }
}