"use client";

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// If we tried to how many times our application renders using the useState hook, we would be caught in an infinite loop since this hook itself causes a re-render.
// To avoid this, we can use the useRef hook.

import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

// useRef() only returns one item. It returns an Object called "current".
// When we initialize useRef() we set the initial value: useRef(0)
// Its like doing this: const count = { current: 0 } We can access the count by using count.current

function RefApp(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const count = useRef<number>(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <div className="text-5xl">useRef Section</div>
      <input
        className="text-black"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </div>
  );
}

// When the user clicks the button, we want to focus on the input field.
function AccessDOMUsingRef(): React.JSX.Element {
  const inputElement = useRef<HTMLInputElement>(null);
  const focudOnInput = () => {
    inputElement.current?.focus();
  };
  return (
    <div>
      <input
        className="text-black"
        type="text"
        ref={inputElement}
      />
      <button
        className="border-2 border-gray-100 rounded-md p-2 bg-slate-500 m-2"
        onClick={focudOnInput}
      >
        Focus on Input
      </button>
    </div>
  );
}

// The useRef hook can also be used to keep track of previous values.
// This is becsause we are ablw to persist useRef values between renders.

// This time we are using a combination of useRef, useEffect and useState to keep track of the previous state value.
// In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
function PreviousValueUsingRef(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const previousValue = useRef<string>("");

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousValue.current}</h2>
    </div>
  );
}

export { RefApp, AccessDOMUsingRef, PreviousValueUsingRef };
