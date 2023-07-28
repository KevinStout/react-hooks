"use client";

// react context is a way to manage state globally.
// It can be used together with the useState hook to share state between deeply nested components more easily than with useState alone.

// State should be held by the highest parent component in the stack that requires access to the state.
// To illustrate, we have many nested components. The component at the top and bottom  of the stack need access to the state.
// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

import React, { useState, createContext, useContext } from "react";
import { ReactDOM } from "react";

// below is an example of prop drilling.
// From lines 13 to 74, we are passing the state as props through each nested component.
type Component2Props = {
  user: string;
};

type Component3Props = {
  user: string;
};

type Component4Props = {
  user: string;
};

type Component5Props = {
  user: string;
};

function Component1(): React.JSX.Element {
  //           ^?
  const [user, setUser] = useState<string>("Kevin");

  return (
    <>
      <h1 className="text-5xl">useContext Section</h1>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }: Component2Props): React.JSX.Element {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }: Component3Props): React.JSX.Element {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }: Component4Props): React.JSX.Element {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }: Component5Props): React.JSX.Element {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello again ${user}!`}</h2>
    </>
  );
}

// Now, let's use Context to manage state globally.
// First, we need to create a context object.
// We can do this by calling the createContext function from the react library.
// The createContext function takes an argument that is the default value of the context object.
// In this case, we are setting the default value to an empty string.
type UserContextProps = {
  user: string;
};

const UserContext = createContext<UserContextProps | null>(null);

function BetterComponent1() {
  const [user, setUser] = useState<string>("Fred");

  return (
    <UserContext.Provider value={{ user }}>
      <h1>{`Hello ${user}!`}</h1>
      <BetterComponent2 />
    </UserContext.Provider>
  );
}

function BetterComponent2() {
  return (
    <>
      <h1>BetterComponent 2</h1>
      <BetterComponent3 />
    </>
  );
}

function BetterComponent3() {
  return (
    <>
      <h1>BetterComponent 3</h1>
      <BetterComponent4 />
    </>
  );
}

function BetterComponent4() {
  return (
    <>
      <h1>BetterComponent 4</h1>
      <BetterComponent5 />
    </>
  );
}

function BetterComponent5() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("BetterComponent5 must be used within a UserContext.Provider");
  }

  const { user } = context;

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export { Component1, BetterComponent1 };
