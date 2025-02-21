import { ChangeEvent, useState } from "react";

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

function ComputerCore() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [tempFinger, setTempFinger] = useState<string | null>(null);
  const [selectedFingers, setSelectedFingers] = useState<string[]>([]);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedFingers((prev) =>
      checked ? [...prev, value] : prev.filter((finger) => finger !== value)
    );
  };
  const handleComputerChoice = () => {
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
                selectedFingers.includes("lc-finger-1") || tempFinger === "lc-finger-1"
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="lc-finger-1"
                value="lc-finger-1"
                className="peer hidden"
                onChange={handleCheckbox}
                disabled={isAnimating} // Disable during animation
              />
              <label
                htmlFor="lc-finger-1"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 2 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("lc-finger-2") || tempFinger === "lc-finger-2"
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="lc-finger-2"
                value="lc-finger-2"
                className="peer hidden"
                onChange={handleCheckbox}
                disabled={isAnimating}
              />
              <label
                htmlFor="lc-finger-2"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 3 */}
            <div
              className={`row-span-4 rounded-t-4xl w-full relative transition-colors duration-300 ${
                selectedFingers.includes("lc-finger-3") || tempFinger === "lc-finger-3"
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="lc-finger-3"
                value="lc-finger-3"
                className="peer hidden"
                onChange={handleCheckbox}
                disabled={isAnimating}
              />
              <label
                htmlFor="lc-finger-3"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 4 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("lc-finger-4") || tempFinger === "lc-finger-4"
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="lc-finger-4"
                value="lc-finger-4"
                className="peer hidden"
                onChange={handleCheckbox}
                disabled={isAnimating}
              />
              <label
                htmlFor="lc-finger-4"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Thumb */}
            <div
              className={`row-span-4 rounded-t-4xl mt-40 -mb-16 rotate-[0.5rad] w-full relative transition-colors duration-300 ${
                selectedFingers.includes("lc-finger-thumb") || tempFinger === "lc-finger-thumb"
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="lc-finger-thumb"
                value="lc-finger-thumb"
                className="peer hidden"
                onChange={handleCheckbox}
                disabled={isAnimating}
              />
              <label
                htmlFor="lc-finger-thumb"
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
                selectedFingers.includes("rc-finger-1") || tempFinger === "rc-finger-1"
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="rc-finger-1"
                value="rc-finger-1"
                className="peer hidden"
                onChange={handleCheckbox}
                disabled={isAnimating}
              />
              <label
                htmlFor="rc-finger-1"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>
            {/* Finger 2 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("rc-finger-2")
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="rc-finger-2"
                value="rc-finger-2"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="rc-finger-2"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 3 */}
            <div
              className={`row-span-4 rounded-t-4xl w-full relative transition-colors duration-300 ${
                selectedFingers.includes("rc-finger-3")
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="rc-finger-3"
                value="rc-finger-3"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="rc-finger-3"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Finger 4 */}
            <div
              className={`row-span-4 rounded-t-4xl mt-10 w-full relative transition-colors duration-300 ${
                selectedFingers.includes("rc-finger-4")
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="rc-finger-4"
                value="rc-finger-4"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="rc-finger-4"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Thumb */}
            <div
              className={`row-span-4 rounded-t-4xl mt-40 -mb-16 rotate-[0.5rad] w-full relative transition-colors duration-300 ${
                selectedFingers.includes("rc-finger-thumb")
                  ? "bg-red-500"
                  : "bg-yellow-100"
              }`}
            >
              <input
                type="checkbox"
                id="rc-finger-thumb"
                value="rc-finger-thumb"
                className="peer hidden"
                onChange={handleCheckbox}
              />
              <label
                htmlFor="rc-finger-thumb"
                className="h-full w-full block cursor-pointer"
              ></label>
            </div>

            {/* Palm */}
            <div className="bg-yellow-100 col-span-5 z-20 me-10"></div>
          </div>
        </section>
      </section>

      <button
        className="border border-amber-400 p-4 col-span-3"
        onClick={() => {handleComputerChoice();}}
      >
        Start Animation
      </button>
    </section>
  );
}

export default ComputerCore;