import { useReducer } from "react";
import Input from "./forms/Input";
import { useTodo } from "./hooks/useTodo";



function UseReducer() {

    const {visibleTodos,removeTodo,clearAll,toggleTodo} = useTodo()
  
  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto mt-6 p-4 bg-white rounded-xl shadow-md">
      <ul className="flex flex-col gap-3">
        {visibleTodos.map((todo) => (
          <li
            key={todo.name}
            className="flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-2">
              <Input
                type="checkbox"
                onChange={() =>toggleTodo(todo)}
                checked={todo.checked}
              />
              <span
                className={`${
                  todo.checked ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {todo.name}
              </span>
            </div>

            <button
              onClick={() => removeTodo(todo)}
              className="text-sm text-red-500 hover:text-red-700 transition"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <button className="bg-blue-400 rounded-md p-2 m-1 cursor-pointer w-fit mx-auto" onClick={()=> clearAll()}>Supprimer les tâches faites</button>
      
    </div>
  );
}

export default UseReducer;
