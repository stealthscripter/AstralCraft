import { useRef } from "react";
import ComputerSelection from "../components/ComputerSelection";
import PlayerSelction from "../components/PlayerSelction";
interface ComputerSelectionMethods {
  handleComputerChoice: () => void;
}

function GameLayout() {
  const computerSelectionRef = useRef<ComputerSelectionMethods | null>(null);

  const handleReadyToPlay = () => {
    if (computerSelectionRef.current) {
      // Call the handleComputerChoice function in the child component
      computerSelectionRef.current.handleComputerChoice();
    }
  };
  return (
    <div
      className="p-4 grid grid-cols-7 gap-x-2 min-h-screen border-4 border-red-800 items-start 
     bg-blend-difference font-2P"
    >
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
    </div>
  );
}

export default GameLayout;