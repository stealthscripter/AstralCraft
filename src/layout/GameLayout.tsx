import { useRef, useState } from "react";
import ComputerSelection from "../components/selection/ComputerSelection";
import PlayerSelction from "../components/selection/PlayerSelction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  setComputerFinger,
  setPlayerFinger,
  setStarted,
} from "../features/GameSlice";
import PlayerCore from "../components/core/PlayerCore";
import ComputerCore from "../components/core/ComputerCore";
import calculateFinger, { calculateWinner } from "../utils/GameEngine";

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
      console.log("not eligiable");
      return;
    }
    if (computerSelectionRef.current) {
      computerSelectionRef.current.handleComputerChoice();
      setTimeout(() => {
        dispatch(setStarted());
      }, 3000); // Dispatch after 2 seconds
    }
  };

  const handleStartGame = () => {
    // const calc = calculateFinger(selectedPlayerFingers.length , selectedComputerFingers.length)
    // console.log("calculateFinger finger" , calc );

    // const wom = calculateWinner(calc , userPick , computerPick)
    // console.log(wom)

    if (computerCoreRef.current) {
      computerCoreRef.current.handleComputerStart(); // Call the child function
    }
  };

  return (
    <div
      className="p-4 grid grid-cols-7 gap-x-2 min-h-screen border-4 border-red-800 items-start 
     bg-blend-difference font-2P"
    >
      {!isStarted ? (
        <>
          <section className="border border-amber-500 col-span-7"></section>
          <section className="border border-amber-500 col-span-3">
            <PlayerSelction />
          </section>
          <section className="border border-amber-500 flex justify-center">
            <button
              className="border border-amber-700 col-start-3 col-span-3 py-2 mt-10"
              onClick={handleReadyToPlay}
            >
              Ready To Play
            </button>
          </section>
          <section className="border border-amber-500 col-span-3">
            {/* Pass the ref to the ComputerSelection component */}
            <ComputerSelection ref={computerSelectionRef} />
          </section>
        </>
      ) : (
        <>
          <section className="border border-amber-500 col-span-3">
            <PlayerCore
              selectedFingers={selectedPlayerFingers}
              setSelectedFingers={setSelectedPlayerFingers}
            />
          </section>
          <section className="border border-amber-500 flex justify-center">
            <button
              className="border border-amber-700 col-start-3 col-span-3 py-2 mt-10"
              onClick={handleStartGame}
            >
              Start the Game
            </button>
          </section>
          <section className="border border-amber-500 col-span-3">
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
