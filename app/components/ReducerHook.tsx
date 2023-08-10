"use client";

// The useReducer hook is similar to the useState hook.
// It allows for custom state logic.
// If you find yourself keeping track of multiple peices of state that rely on complex logic, useReducer may be uesful.

// the useReducer hook takes in two arguments:
// 1. a reducer function
// 2. the initial state
// useReducer(<reducer function>, <initial state>)

// The reducer function contains your custom state logic and the initial State can be a simple value but generally will be an object.
//

import React, { useReducer } from "react";

type Todo = {
  id: number;
  title: string;
  complete: boolean;
};

type Action =
  | {
      type: "COMPLETE";
      id: number;
    }
  | { type: "ADD"; title: string };

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];

// This is just the logic to keep track of the todo complete status.
// All of the logic to add, delete, and complete a todo could be contained within a single useReducer hook by adding more actions.
// I included the logic to add a todo in this example to show how to add more actions to a reducer function and pass in the action type and payload.
const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "COMPLETE": {
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    }
    case "ADD": {
      return [...state, { id: state.length + 1, title: action.title, complete: false }];
    }
    default: {
      throw Error("Unknown action:");
    }
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const titleInputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleInputRef.current?.value) {
      dispatch({ type: "ADD", title: titleInputRef.current.value });
      titleInputRef.current.value = "";
    }
  };

  const handleComplete = (todo: Todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      <h1 className="text-5xl">useReducer Section</h1>
      <form
        className="m-2"
        onSubmit={onSubmit}
      >
        <label htmlFor="titleInput">Add Todo</label>
        <input
          className="text-black"
          id="titleInput"
          type="text"
          ref={titleInputRef}
          name="title"
        />
        <button
          className="border-2 border-gray-100 rounded-md p-2 bg-slate-500 m-2"
          type="submit"
        >
          Add
        </button>
      </form>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Todos;
