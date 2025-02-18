import ComputerSelection from "../components/ComputerSelection";
import PlayerSelction from "../components/PlayerSelction";
import Variable from "../components/Variable";

function GameLayout() {
  return (
    <div
      className="p-4 grid grid-cols-12 gap-x-2 min-h-screen border-4 border-red-800 
    bg-[url(src/assets/backgrounds/stacked-steps-haikei.svg)] bg-slate-900 bg-blend-difference"
      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <PlayerSelction />
      <ComputerSelection />
    </div>
  );
}

export default GameLayout;
