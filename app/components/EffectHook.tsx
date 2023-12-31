"use client";
import { clear } from "console";

// useEffect is a React Hook that lets you synchronize a component with an external system.
// Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page. These systems aren’t controlled by React, so they are called external.

// The useEffect Hook allows you to perform side effects in your function components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional. But it is recommended to include it to avoid bugs. not including it can cause the useEffect function to run on every render.
// passing in an empty array as the second argument will only run the useEffect function once.
// useEffect(<function>, <dependency>)

// no dependency passed in will cause useEffect to run on every render.
// if an empty array is passed in, useEffect will only run on the first render.
// if a value is passed in, useEffect will run on the first render and whenever the value changes.

// If there are multiple values that need to be tracked, pass them in as an array.

import React, { useState, useEffect, use } from "react";

// use a timer as the first example.
function Timer(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  // passing in an empty array as the second argument will only run the useEffect function once.
  useEffect(() => {
    setTimeout(() => {
      setCount((previousCount): number => previousCount + 1);
    }, 1000);
  }, []);

  return (
    <div className="w-1/2 text-center">
      <h1 className="text-5xl">useEffect Section</h1>
      <h1>I have been rendered {count} times!</h1>
    </div>
  );
}

function Counter(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect((): void => {
    setCalculation((): number => count * 2);
  }, [count]);

  return (
    <div className="w-1/2 text-center">
      <div>Count: {count}</div>
      <button
        className="border-2 border-gray-100 rounded-md p-2 bg-slate-500"
        onClick={(): void => setCount((c): number => ++c)}
      >
        ++
      </button>
      <div>Calculation: {calculation}</div>
    </div>
  );
}

// Some effects require cleanup to reduce memory leaks.
// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
// We can do this by including a return function at the end of the useEffect Hook.

function CleanTimer(): React.JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //  ^?
    let timer = setTimeout((): void => {
      setCount((previousCount): number => previousCount + 1);
    }, 1000);

    // clearTimeout is a helper function that clears the timer.
    return (): void => clearTimeout(timer);
  }, []);

  return (
    <div className="w-1/2 text-center">
      <h1>I have been rendered {count} times!</h1>
    </div>
  );
}

export { Timer, Counter, CleanTimer };
