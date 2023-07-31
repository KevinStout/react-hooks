import Image from "next/image";
import { FavoriteColor, Car, CarObject, LoginForm, LoginFormNoState } from "./components/StateHook";
import { Timer, Counter, CleanTimer } from "./components/EffectHook";
import { Component1, BetterComponent1 } from "./components/ContextHook";
import { RefApp, AccessDOMUsingRef, PreviousValueUsingRef } from "./components/RefHook";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <hr className="border-2 w-4/6 m-4" />
      <FavoriteColor />
      <Car />
      <CarObject />
      <LoginForm />
      <LoginFormNoState />
      <hr className="border-2 w-4/6 m-4" />
      <Timer />
      <Counter />
      <CleanTimer />
      <hr className="border-2 w-4/6 m-4" />
      <Component1 />
      <div className="p-4"></div>
      <BetterComponent1 />
      <hr className="border-2 w-4/6 m-4" />
      <RefApp />
      <AccessDOMUsingRef />
      <PreviousValueUsingRef />
      <hr className="border-2 w-4/6 m-4" />
    </div>
  );
}
