"use client";

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// If we tried to how many times our application renders using the useState hook, we would be caught in an infinite loop since this hook itself causes a re-render.
// To avoid this, we can use the useRef hook.

import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

function RefApp(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const count = useRef<number>(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <div className="text-5xl">useRef Section</div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>Render Count: {count.current}</h1>
    </div>
  );
}

export default RefApp;
