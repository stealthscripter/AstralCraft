import { useState } from "react";
import ComputerSelection from "../components/ComputerSelection";
import PlayerSelction from "../components/PlayerSelction";
import { calculateWinner } from "../utils/GameEngine";

function AppLayout() {
  
  return (
    <div className="border-3 border-amber-500 min-h-screen p-10 grid grid-cols-2 gap-x-5">
        <div className="border border-red-800">
            <PlayerSelction />
        </div>
        <div className="border border-red-800">
          <ComputerSelection />
        </div>
    </div>
  );
}

export default AppLayout;
