"use client";

// react context is a way to manage state globally.
// It can be used together with the useState hook to share state between deeply nested components more easily than with useState alone.

// State should be held by the highest parent component in the stack that requires access to the state.
// To illustrate, we have many nested components. The component at the top and bottom  of the stack need access to the state.
// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

import React, { useState } from "react";

interface Component2Props {
  user: string;
}

interface Component3Props {
  user: string;
}

interface Component4Props {
  user: string;
}

interface Component5Props {
  user: string;
}

function Component1() {
  const [user, setUser] = useState<string>("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }: Component2Props) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }: Component3Props) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }: Component4Props) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }: Component5Props) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component1;
