import { useRef, useState } from "react";
import ComputerSelection from "../components/selection/ComputerSelection";
import PlayerSelction from "../components/selection/PlayerSelction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  setComputerFinger,
  setPlayerFinger,
  setStarted,
  setWhoStart,
} from "../features/GameSlice";
import PlayerCore from "../components/core/PlayerCore";
import ComputerCore from "../components/core/ComputerCore";
import calculateFinger, { calculateWinner } from "../utils/GameEngine";
import { resetPicks } from "../features/PickSlice";

interface ComputerSelectionMethods {
  handleComputerChoice: () => void;
}
interface ComputerCoreMethods {
  handleComputerStart: () => void;
}

function GameLayout() {
  const [selectedPlayerFingers, setSelectedPlayerFingers] = useState<string[]>(
    []
  );
  const [selectedComputerFingers, setSelectedComputerFingers] = useState<
    string[]
  >([]);
  const [isProcessing, setIsProcessing] = useState(false); // New state for loading
  const [isThrowing, setIsThrowing] = useState(false); // New state for loading
  const [history, setHistory] = useState<string[]>([]);
  // Refs
  const computerSelectionRef = useRef<ComputerSelectionMethods | null>(null);
  const computerCoreRef = useRef<ComputerCoreMethods | null>(null);

  const computerFinger = useSelector(
    (state: RootState) => state.gameState.computerFinger
  );
  const playerFinger = useSelector(
    (state: RootState) => state.gameState.playerFinger
  );
  const userPick = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPick = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );
  const isStarted = useSelector((state: RootState) => state.gameState.started);
  const dispatch = useDispatch();

  const handleReadyToPlay = () => {
    if (userPick.length < 2) {
      console.log("not eligible");
      return;
    }
    setIsProcessing(true); // Set loading state to true
    if (computerSelectionRef.current) {
      computerSelectionRef.current.handleComputerChoice();
      setTimeout(() => {
        dispatch(setStarted(true));
        setIsProcessing(false); // Set loading state to false after computer choice is made
      }, 3000); // Dispatch after 3 seconds
    }
  };

  const handleStartGame = () => {
    setIsThrowing(true); // Set loading state to true
    if (computerCoreRef.current) {
      computerCoreRef.current.handleComputerStart(); // Call the child function
      setTimeout(() => {
        setIsThrowing(false); // Set loading state to false after computer choice is made

        const calc = calculateFinger(
          selectedPlayerFingers.length,
          selectedComputerFingers.length
        );
        const winner = calculateWinner(calc, userPick, computerPick);
        console.log("winner", winner);
        setHistory((prev) => [...prev, winner]);
      }, 3000); // Dispatch after 3 seconds
    }
  };

  return (
    <div
      className="p-4 grid grid-cols-7 gap-x-2 min-h-screen items-start 
     font-2P bg-[url(src/assets/backgrounds/stacked-steps-haikei.svg)] bg-slate-900 bg-blend-difference"
      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      {!isStarted ? (
        <>
          <section className="col-span-7 ">
            <h1 className="text-sm text-center">
              red box variable you choose and blue box is belong to computer (
              its not matrix )
            </h1>
          </section>
          <section className="col-span-3">
            <PlayerSelction />
          </section>
          <section className="flex justify-center">
            <button
              className={`border border-amber-700 col-start-3 col-span-3 py-3 cursor-pointer mt-10 px-4 ${
                isProcessing ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleReadyToPlay}
              disabled={isProcessing} // Disable button when processing
            >
              {isProcessing ? "Processing..." : "Ready To Play"}{" "}
              {/* Show loading text */}
            </button>
          </section>
          <section className="col-span-3">
            {/* Pass the ref to the ComputerSelection component */}
            <ComputerSelection ref={computerSelectionRef} />
          </section>
        </>
      ) : (
        <>
          <section className="col-span-7">
            <h1 className="text-sm text-center">
              you can choose the thrown finger number by click fingers and
              toggle it{" "}
            </h1>
            <button
              className="text-sm border border-amber-600 px-4 py-2 cursor-pointer"
              onClick={() => {
                dispatch(setStarted(false));
              }}
            >
              Set Variable Again
            </button>
          </section>
          <section className="col-span-3">
            <PlayerCore
              selectedFingers={selectedPlayerFingers}
              setSelectedFingers={setSelectedPlayerFingers}
            />
          </section>
          <section className="flex justify-center items-center flex-col">
            <button
              className={`border border-amber-700 col-start-3 col-span-3 py-3 cursor-pointer mt-10 px-4 ${
                isThrowing ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleStartGame}
              disabled={isProcessing} // Disable button when processing
            >
              {isThrowing ? "Throwing..." : "Start Game"}{" "}
              {/* Show loading text */}
            </button>
            <div className="mt-10">
              <h1 className="text-sm">Game History</h1>
              {history.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </section>
          <section className="col-span-3">
            <ComputerCore
              ref={computerCoreRef}
              selectedFingers={selectedComputerFingers}
              setSelectedFingers={setSelectedComputerFingers}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default GameLayout;
