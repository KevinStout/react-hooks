"use client";
// The React useMemo hook returns a memoized value.

// Think of memoization as chaching a value so that it does not need to be recalculated.
// The useMemo hook only runs when one of its dependencies update.
// This can improve performance by reducing the number of times a function is called.
// The useMemo and useCallback hooks are similar. The difference is that useMemo returns a memoized value and useCallback returns a memoized function.

// This example is to show how an expensive calculation can be memoized to improve performance.
// We can wrap the expensive function call with useMemo
// The useMemo hook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies change.
// In this example, the expensive function will only run when the count changes.
import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const MemoHook: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation: number = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
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
      </div>
      <hr />
      <div>
        Count: {count}
        <button
          className="border-2 border-gray-100 rounded-md p-2 bg-slate-500 m-2"
          onClick={increment}
        >
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number): number => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default MemoHook;
