import Image from "next/image";
import { FavoriteColor, Car, CarObject } from "./components/StateHook";
import { Timer, Counter, CleanTimer } from "./components/EffectHook";
import { Component1, BetterComponent1 } from "./components/ContextHook";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <hr className="border-2 w-4/6 m-4" />
      <FavoriteColor />
      <Car />
      <CarObject />
      <hr className="border-2 w-4/6 m-4" />
      <Timer />
      <Counter />
      <CleanTimer />
      <hr className="border-2 w-4/6 m-4" />
      <Component1 />
      <div className="p-4"></div>
      <BetterComponent1 />
      <hr className="border-2 w-4/6 m-4" />
    </div>
  );
}
