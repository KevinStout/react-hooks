import Image from "next/image";
import { FavoriteColor, Car, CarObject } from "./components/StateHook";
import { Timer, Counter, CleanTimer } from "./components/EffectHook";

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
    </div>
  );
}
