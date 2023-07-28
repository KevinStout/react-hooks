"use client";
// The react useState Hook allows us to track state in a function component.
// State generally refers to data or properties thay need to be tracked in an application.

// We are destructuring the useState Hook from the react library as it is a named export.
import React, { useState } from "react";

// Initalizing state at the top of the component.
function FavoriteColor() {
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
      <button className="border-2 border-gray-100 rounded-md p-2 m-2 bg-slate-500" type="button" onClick={() => setColor("BLUE")}>
        BLUE
      </button>
      <button className="border-2 border-gray-100 rounded-md p-2 m-2 bg-slate-500" type="button" onClick={() => setColor("GREEN")}>
        GREEN
      </button>
    </div>
  );
}

// We can also use the useState Hook to track multiple state values and types.
// all we need to do is call the useState Hook multiple times.
function Car() {
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

interface Car {
  brand: string;
  model: string;
  color: string;
  year: number;
}

// Or, we can just use one useState Hook to track an object instead of multiple useState Hooks.
function CarObject() {
  const [car, setCar] = useState<Car>({ brand: "Ford", model: "Mustang", color: "red", year: 1964 });

  // when state is updated, the entire state gets overwritten.
  // so, we need to make sure to include all the properties of the object when updating state.
  // we can do this by using the spread operator.
  const updateColor = () => {
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
      <button className="border-2 border-gray-100 rounded-md p-2 bg-slate-500" type="button" onClick={updateColor}>
        YELLOW
      </button>
    </div>
  );
}

export { FavoriteColor, Car, CarObject };
