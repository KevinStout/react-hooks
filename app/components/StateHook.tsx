"use client";
// The react useState Hook allows us to track state in a function component.
// State generally refers to data or properties thay need to be tracked in an application.

// We are destructuring the useState Hook from the react library as it is a named export.
import React, { useState } from "react";

// Initalizing state at the top of the component.
function FavoriteColor(): React.JSX.Element {
  // the first value 'color' in the array is the current state value.
  // the second value 'setColor' is the function that will update the state value.
  // the 'color' and 'setColor' values can be named anything.
  // lastly we set the initial state value to "red": useState("red")
  const [color, setColor] = useState<string>("red");

  // we can include the state value anywhere in the component.
  return (
    <div className="w-1/2 text-center">
      <h1 className="text-5xl">useState Section</h1>
      <h1>My Favorite Color is {color}</h1>
      <button
        className="border-2 border-gray-100 rounded-md p-2 m-2 bg-slate-500"
        type="button"
        onClick={() => setColor("BLUE")}
      >
        BLUE
      </button>
      <button
        className="border-2 border-gray-100 rounded-md p-2 m-2 bg-slate-500"
        type="button"
        onClick={() => setColor("GREEN")}
      >
        GREEN
      </button>
    </div>
  );
}

// We can also use the useState Hook to track multiple state values and types.
// all we need to do is call the useState Hook multiple times.
//
function Car(): React.JSX.Element {
  const [brand, setBrand] = useState<string>("Ford");
  const [model, setModel] = useState<string>("Mustang");
  const [color, setColor] = useState<string>("red");
  const [year, setYear] = useState<number>(1964);

  return (
    <div className="w-1/2 text-center">
      <h1 className="pt-4">My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </div>
  );
}

type Car = {
  brand: string;
  model: string;
  color: string;
  year: number;
};

// Or, we can just use one useState Hook to track an object instead of multiple useState Hooks.
function CarObject(): React.JSX.Element {
  const [car, setCar] = useState<Car>({ brand: "Ford", model: "Mustang", color: "red", year: 1964 });

  // when state is updated, the entire state gets overwritten.
  // so, we need to make sure to include all the properties of the object when updating state.
  // we can do this by using the spread operator.
  const updateColor = (): void => {
    setCar((previousState) => {
      return { ...previousState, color: "YELLOW" };
    });
  };

  return (
    <div className="w-1/2 text-center">
      <h1 className="pt-4">car object</h1>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        className="border-2 border-gray-100 rounded-md p-2 bg-slate-500"
        type="button"
        onClick={updateColor}
      >
        YELLOW
      </button>
    </div>
  );
}

// Now lets look at some mistakes that can be made when using the useState Hook.
// Here is a component that has an email and password input field along with a submit button.
// In this case we do not need to track the input values as state.
function LoginForm(): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <form
      className="m-2"
      onSubmit={onSubmit}
    >
      <label htmlFor="email1">Email</label>
      <br />
      <input
        className="text-black"
        id="email1"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password1">Password</label>
      <br />
      <input
        className="text-black"
        id="password1"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        className="border-2 border-gray-100 rounded-md p-2 bg-slate-500"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

// lets refactor the LoginForm to not use state.
import { useRef } from "react";

function LoginFormNoState(): React.JSX.Element {
  //  const [email, setEmail] = useState<string>("");
  //  const [password, setPassword] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null); // we need to tell useRef what type of element we are referencing and initialize it to null, it does not like undefined.
  const passwordRef = useRef<HTMLInputElement>(null);

  function onSubmitNoState(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email: emailRef.current?.value, password: passwordRef.current?.value });
  }

  return (
    <div>
      <div className="text-2xl">No state login form</div>
      <form
        className="m-2"
        onSubmit={onSubmitNoState}
      >
        <label htmlFor="email2">Email</label>
        <br />
        <input
          className="text-black"
          id="email2"
          type="text"
          placeholder="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <br />
        <label htmlFor="password2">Password</label>
        <br />
        <input
          className="text-black"
          id="password2"
          type="password"
          placeholder="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <br />
        <button
          className="border-2 border-gray-100 rounded-md p-2 bg-slate-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { FavoriteColor, Car, CarObject, LoginForm, LoginFormNoState };
