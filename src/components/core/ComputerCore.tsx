
import React, { ChangeEvent, useImperativeHandle, useState , forwardRef, ForwardedRef} from "react";
import { useDispatch } from "react-redux";
import { setComputerFinger } from "../../features/GameSlice";

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
      id: "lc-finger-1",
      styles: "mt-28",
  },
  {
      id: "lc-finger-2",
      styles: "mt-10",
  },
  {
      id: "lc-finger-3",
      styles: "",
  },
  {
      id: "lc-finger-4",
      styles: "mt-10",
  },
  {
      id: "lc-finger-thumb",
      styles: "mt-40 -mb-16 rotate-[0.5rad]",
  },
]

const rightFingers = [
  {
      id: "rc-finger-1",
      styles: "mt-28",
  },
  {
      id: "rc-finger-2",
      styles: "mt-10",
  },
  {
      id: "rc-finger-3",
      styles: "",
  },
  {
      id: "rc-finger-4",
      styles: "mt-10",
  },
  {
      id: "rc-finger-thumb",
      styles: "mt-40 -mb-16 rotate-[0.5rad]",
  },
]
interface PlayerCoreProps {
  selectedFingers: string[];
  setSelectedFingers: React.Dispatch<React.SetStateAction<string[]>>;
}

const ComputerCore = React.forwardRef(
  (
    { selectedFingers, setSelectedFingers }: PlayerCoreProps,
    ref: ForwardedRef<any>
  ) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [tempFinger, setTempFinger] = useState<string | null>(null);
  const dispatch = useDispatch();
  
  const handleComputerStart = () => {
    setSelectedFingers([]); // Reset the selected fingers
    setIsAnimating(true);
    let animationCount = 0;
    const animationDuration = 2000; // 2 seconds
    const intervalTime = 200; // 200ms interval

    const animationInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allFingers.length);
      setTempFinger(allFingers[randomIndex]); // Highlight a random finger
      animationCount += intervalTime;

      if (animationCount >= animationDuration) {
        clearInterval(animationInterval);
        setIsAnimating(false);
        setTempFinger(null);

        // Randomly decide how many fingers to select (1 to all fingers)
        const numberOfFingersToSelect =
          Math.floor(Math.random() * allFingers.length) + 1;

        // Randomly select the fingers
        const shuffledFingers = [...allFingers].sort(() => 0.5 - Math.random());
        const finalSelection = shuffledFingers.slice(0, numberOfFingersToSelect);

        setSelectedFingers(finalSelection); // Set the final selection
      }
    }, intervalTime);
  };

  useImperativeHandle(ref, () => ({
    handleComputerStart,
  }));


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
                className={`row-span-4 rounded-t-4xl w-full relative transition-colors duration-300 ${
                  selectedFingers.includes(finger.id) || tempFinger === finger.id
                    ? "bg-red-500"
                    : "bg-yellow-100"
                } ${finger.styles}`}
              >
                <input
                  type="checkbox"
                  id={finger.id}
                  value={finger.id}
                  className="peer hidden"
                  disabled={isAnimating}
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


        <section className="h-full">
          {/* Right Hand */}
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-x-2 scale-x-[-1]">
          {rightFingers.map((finger) => (
              <div
                key={finger.id}
                className={`row-span-4 rounded-t-4xl w-full relative transition-colors duration-300 ${
                  selectedFingers.includes(finger.id) || tempFinger === finger.id
                    ? "bg-red-500"
                    : "bg-yellow-100"
                } ${finger.styles}`}
              >
                <input
                  type="checkbox"
                  id={finger.id}
                  value={finger.id}
                  className="peer hidden"
                  disabled={isAnimating}
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

      <button
        className="border border-amber-400 p-4 col-span-3"
        onClick={handleComputerStart}
      >
        Start Animation
      </button>
      <button
        className="border border-amber-400 p-4 col-span-3"
        onClick={() => {dispatch(setComputerFinger(selectedFingers));}}
      >
        Start Game
      </button>
    </section>
  );
}
);

export default ComputerCore;