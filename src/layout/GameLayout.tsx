import { useRef } from "react";
import ComputerSelection from "../components/ComputerSelection";
import PlayerSelction from "../components/PlayerSelction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setStarted } from "../features/GameSlice";
import PlayerCore from "../components/PlayerCore";
interface ComputerSelectionMethods {
  handleComputerChoice: () => void;
}

function GameLayout() {
  const computerSelectionRef = useRef<ComputerSelectionMethods | null>(null);

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
        <PlayerCore />
      )}
    </div>
  );
}

export default GameLayout;
