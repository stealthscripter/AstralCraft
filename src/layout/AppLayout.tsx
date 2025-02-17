import { useState } from "react";
import ComputerSelection from "../components/ComputerSelection";
import PlayerSelction from "../components/PlayerSelction";

function AppLayout() {
  const [currentTab, setCurrentTab] = useState<string>("computer");
  return (
    <div className="border-amber-500 h-96 p-10">
      <nav>
        <ul className="cursor-pointer text-3xl">
          <li className={`${currentTab === 'computer' ? "bg-red-300" : ""}`}
            onClick={() => {
              setCurrentTab("computer");
            }}
          >
            Computer
          </li>
          <li className={`${currentTab === 'user' ? "bg-red-300" : ""}`}
            onClick={() => {
              setCurrentTab("user");
            }}
          >
            User
          </li>
        </ul>
      </nav>

      {currentTab === "computer" ? <ComputerSelection /> : <PlayerSelction />}
    </div>
  );
}

export default AppLayout;
