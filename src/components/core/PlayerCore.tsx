import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChangeEvent, useState } from "react";
import { setPlayerFinger } from "../../features/GameSlice";

const allFingers = [
  "lc-finger-1",
  "lc-finger-2",
  "lc-finger-3",
  "lc-finger-4",
  "lc-finger-thumb",
  "rc-finger-1",
  "rc-finger-2",
  "rc-finger-3",
  "rc-finger-4",
  "rc-finger-thumb",
];
const leftFingers = [
  {
      id: "l-finger-1",
      styles: "mt-28",
  },
  {
      id: "l-finger-2",
      styles: "mt-10",
  },
  {
      id: "l-finger-3",
      styles: "",
  },
  {
      id: "l-finger-4",
      styles: "mt-10",
  },
  {
      id: "l-finger-thumb",
      styles: "mt-40 -mb-16 rotate-[0.5rad]",
  },
]

const rightFingers = [
  {
      id: "r-finger-1",
      styles: "mt-28",
  },
  {
      id: "r-finger-2",
      styles: "mt-10",
  },
  {
      id: "r-finger-3",
      styles: "",
  },
  {
      id: "r-finger-4",
      styles: "mt-10",
  },
  {
      id: "r-finger-thumb",
      styles: "mt-40 -mb-16 rotate-[0.5rad]",
  },
]

interface PlayerCoreProps {
  selectedFingers: string[];
  setSelectedFingers: React.Dispatch<React.SetStateAction<string[]>>;
}

function PlayerCore({ selectedFingers, setSelectedFingers }: PlayerCoreProps) {
  const dispatch = useDispatch();
  const userPick = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPick = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setSelectedFingers((prev) =>
      checked ? [...prev, value] : prev.filter((finger) => finger !== value)
    );
  }

  function handleStart(){
    console.log("Start the game")
    dispatch(setPlayerFinger(selectedFingers))
  }
  return (
    <section className="grid grid-cols-12 gap-x-5 gap-y-5">
      <section className="border border-amber-800 py-5 col-span-12 flex justify-center">
        <h1>How Many Fingers do you want to throw? </h1>
      </section>
      <section className="border border-amber-800 py-5 h-96 col-span-12 grid grid-cols-2 gap-x-18">
        <section>
          {/* Left Hand */}
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-x-2">
            {/* Finger 1 */}
            {leftFingers.map((finger) => (
              <div
                key={finger.id}
                className={`row-span-4 rounded-t-4xl ${finger.styles} w-full relative transition-colors duration-300 ${
                  selectedFingers.includes(finger.id) ? "bg-red-500" : "bg-yellow-100"
                }`}
              >
                <input
                  type="checkbox"
                  id={finger.id}
                  value={finger.id}
                  className="peer hidden"
                  onChange={handleCheckbox}
                />
                <label
                  htmlFor={finger.id}
                  className="h-full w-full block cursor-pointer"
                ></label>
              </div>
            ))}

            {/* Palm */}
            <div className="bg-yellow-100 col-span-5 z-20 me-10"></div>
          </div>
        </section>
        <section className="h-full">
          {/* Right Hand */}
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-x-2 scale-x-[-1]">
          {rightFingers.map((finger) => (
              <div
                key={finger.id}
                className={`row-span-4 rounded-t-4xl ${finger.styles} w-full relative transition-colors duration-300 ${
                  selectedFingers.includes(finger.id) ? "bg-red-500" : "bg-yellow-100"
                }`}
              >
                <input
                  type="checkbox"
                  id={finger.id}
                  value={finger.id}
                  className="peer hidden"
                  onChange={handleCheckbox}
                />
                <label
                  htmlFor={finger.id}
                  className="h-full w-full block cursor-pointer"
                ></label>
              </div>
            ))}
             <div className="bg-yellow-100 col-span-5 z-20 me-10"></div>
          </div>
        </section>
      </section>

      <button className="border border-amber-400 p-4 col-span-3" onClick={handleStart}>Start Again</button>
    </section>
  );
}

export default PlayerCore;
