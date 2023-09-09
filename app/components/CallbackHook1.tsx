"use client";
import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Todos from "./CallbackHook";

const NotePad: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos
        todos={todos}
        addTodo={addTodo}
      />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default NotePad;
