import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChangeEvent, useState } from "react";

function PlayerCore() {
  const [selectedFingers, setSelectedFingers] = useState<string[]>([]);
  const userPick = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPick = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );

  function handleStart() {
    console.log("start the game");
  }

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;

    setSelectedFingers((prev) =>
      checked ? [...prev, value] : prev.filter((finger) => finger !== value)
    );
    
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
            <div
              className={`row-span-4 rounded-t-4xl mt-28 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("l-finger-1") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="l-finger-1"
                value="l-finger-1"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="l-finger-1"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 2 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("l-finger-2") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="l-finger-2"
                value="l-finger-2"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="l-finger-2"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 3 */}
            <div
              className={`row-span-4 rounded-t-4xl w-full relative transition-colors duration-300 ${
                selectedFingers.includes("l-finger-3") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="l-finger-3"
                value="l-finger-3"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="l-finger-3"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 4 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("l-finger-4") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="l-finger-4"
                value="l-finger-4"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="l-finger-4"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Thumb */}
            <div
              className={`row-span-4 rounded-t-4xl mt-40 -mb-16 rotate-[0.5rad] w-full relative transition-colors duration-300 ${
                selectedFingers.includes("l-finger-thumb") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="l-finger-thumb"
                value="l-finger-thumb"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="l-finger-thumb"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Palm */}
            <div className="bg-yellow-100 col-span-5 z-20 me-10"></div>
          </div>
        </section>
        <section className="h-full">
          {/* Right Hand */}
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-x-2 scale-x-[-1]">
            {/* Finger 1 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-28 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("r-finger-1") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="r-finger-1"
                value="r-finger-1"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="r-finger-1"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 2 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("r-finger-2") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="r-finger-2"
                value="r-finger-2"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="r-finger-2"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 3 */}
            <div
              className={`row-span-4 rounded-t-4xl w-full relative transition-colors duration-300 ${
                selectedFingers.includes("r-finger-3") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="r-finger-3"
                value="r-finger-3"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="r-finger-3"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 4 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("r-finger-4") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="r-finger-4"
                value="r-finger-4"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="r-finger-4"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Thumb */}
            <div
              className={`row-span-4 rounded-t-4xl mt-40 -mb-16 rotate-[0.5rad] w-full relative transition-colors duration-300 ${
                selectedFingers.includes("r-finger-thumb") ? "bg-red-500" : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="r-finger-thumb"
                value="r-finger-thumb"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="r-finger-thumb"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Palm */}
            <div className="bg-yellow-100 col-span-5 z-20 me-10"></div>
          </div>
        </section>
      </section>

      <button className="border border-amber-400 p-4 col-span-3" onClick={() => {console.log(selectedFingers.length)}}>Start Again</button>
    </section>
  );
}

export default PlayerCore;
