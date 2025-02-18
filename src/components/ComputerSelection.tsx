import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { resetComputerPicks, setComputerPick } from "../features/PickSlice";
import { useState, useEffect } from "react"; // Import useEffect and useState

const gridSchema = [
  { picks: "desto", inputGrid: "col-start-3" },
  { picks: "finger", inputGrid: "col-start-6" },
  { picks: "caw", inputGrid: "col-start-9 " },
  { picks: "cawter", inputGrid: "col-start-4 " },
  { picks: "oli", inputGrid: "col-start-8 " },
];

function ComputerSelection() {
  const dispatch = useDispatch<AppDispatch>();
  const userPicks = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPicks = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );
  const availablePicks = useSelector(
    (state: RootState) => state.picksVariable.picksVariable
  );

  const [isAnimating, setIsAnimating] = useState(false); // State to track animation
  const [tempPick, setTempPick] = useState<string | null>(null); // Temporary pick during animation

  function handleComputerChoice(): void {
    setIsAnimating(true); // Start animation
    let animationCount = 0;
    const animationDuration = 2000; // 2 seconds of animation
    const intervalTime = 200; // Switch picks every 200ms

    const animationInterval = setInterval(() => {
      // Randomly select a temporary pick during animation
      const randomIndex = Math.floor(Math.random() * availablePicks.length);
      setTempPick(availablePicks[randomIndex]);
      animationCount += intervalTime;

      // Stop animation after the duration
      if (animationCount >= animationDuration) {
        clearInterval(animationInterval);
        setIsAnimating(false); // Stop animation
        dispatch(setComputerPick()); // Dispatch final pick
        setTempPick(null); // Reset temporary pick
      }
    }, intervalTime);
  }

  return (
    <div className="border border-teal-500 col-span-6 font-2P">
      <section className="border border-teal-500 grid grid-cols-12 gap-x-5 gap-y-5">
        <section className="border border-amber-800 col-span-12 py-5 flex justify-center">
          <h1 className="text-xl">Player 2 | Computer </h1>
        </section>
        <section className="border border-amber-800 py-7 col-span-12 flex justify-center">
          <h1 className="text-xl">Game Variable </h1>
        </section>

        {gridSchema.map((pick) => (
          <section
            key={pick.picks}
            className={`border border-amber-800 ${pick.inputGrid} col-span-2 flex justify-center`}
          >
            <input
              type="checkbox"
              id={pick.picks}
              value={pick.picks}
              disabled
              checked={computerPicks.includes(pick.picks) || (isAnimating && tempPick === pick.picks)}
              className="peer hidden"
            />
            <label
              htmlFor={pick.picks}
              onClick={(e) => e.preventDefault()}
              className={`select-none py-10 cursor-pointer transition-colors duration-200 ease-in-out w-full
               peer-checked:bg-red-300 peer-checked:text-gray-900 peer-checked:border-black-200 flex items-center justify-center ${!availablePicks.includes(pick.picks) ? "bg-amber-400" : ""}`}
            >
              {pick.picks}
            </label>
          </section>
        ))}

        <button
          className="border border-amber-700 col-start-3 col-span-3 py-2 mt-10"
          onClick={() => dispatch(resetComputerPicks())}
        >
          Reset Picks
        </button>

        <button
          className="border border-amber-700 col-start-6 col-span-3 py-2 mt-10"
          onClick={handleComputerChoice}
          disabled={isAnimating || computerPicks.length > 0} // Disable button during animation
        >
          {isAnimating ? "Choosing..." : "Make Computer Pick"}
        </button>
      </section>
    </div>
  );
}

export default ComputerSelection;