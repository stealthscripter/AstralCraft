import { useState } from "react";
import ComputerChoice from "../components/ComputerChoice";
import VariableChoice from "../components/VariableChoice";

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

      {currentTab === "computer" ? <ComputerChoice /> : <VariableChoice />}
    </div>
  );
}

export default AppLayout;
