// this is a file that shows how the new useCallback hook works

// The React useCallback hook returns a memoized callback function.
// Think of memoization as chaching a value so that it does not need to be recalculated.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback hook only runs when one of its dependencies update.
// This can improve performance by reducing the number of times a function is called.
// The useCallback hook is similar to the useMemo hook. The difference is that useMemo returns a memoized value and useCallback returns a memoized function.

// One reason to use useCallback is to prevent a commponent from re-rendering unless its props have changed.
// In this example, we will use the useCallback hook to prevent the  Todos component from re-rendering needlessly.

import React, { memo } from "react";
interface TodosProps {
  todos: string[];
  addTodo: () => void;
}

const Todos: React.FC<TodosProps> = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button
        className="border-2 border-gray-100 rounded-md p-2 bg-slate-500 m-2"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </>
  );
};

export default memo(Todos);
