import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserPick,
  resetUserPicks,
  unsetUserPick,
} from "../features/PickSlice"; // Update import according to your file structure
import { RootState } from "../store";
import calculateFinger, { calculateWinner } from "../utils/GameEngine";
import { addWinner } from "../features/GameSlice";

const PlayerSelction: React.FC = () => {
  
  const [playerFinger, setPlayerFinger] = useState<number>(0);
  
  const userPick = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPick = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );


  const dispatch = useDispatch();
  const { picksVariable, userPicks } = useSelector(
    (state: RootState) => state.picksVariable
  );

  const variables = ["desto", "finger", "caw", "cawter", "oli"];

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      const newValue = e.target.value;
      let updatedPicks: string[];
      let removedItem: string | null = null;
  
      if (userPicks.length >= 2) {
        removedItem = userPicks[0];
        updatedPicks = userPicks.slice(1).concat(newValue);
      } else {
        updatedPicks = [...userPicks, newValue];
      }
      dispatch(setUserPick({ updatedPicks, removedItem }));
    }
  }

  function handleWinner(){
    
    const x : number = calculateFinger(playerFinger  , 5)
    console.log(x)
    const winner = (calculateWinner(x , userPick , computerPick))
    dispatch(addWinner(winner))
  }
   
  return (
    <div>
      <h3>Available Picks</h3>
      <div>
        {variables.map((pick: string) => (
          <div key={pick}>
            <input
              type="checkbox"
              id={pick}
              checked={userPicks.includes(pick)}
              value={pick}
              disabled={!picksVariable.includes(pick)}
              onChange={handleCheckbox}
            />
            <label htmlFor={pick}>{pick}</label>
          </div>
        ))}
      </div>

      <h4>Your Picks</h4>
      <ul>
        {userPicks.map((pick) => (
          <li key={pick}>{pick}</li>
        ))}
      </ul>

      <input type="number" onChange={(e) => setPlayerFinger(Number(e.target.value))}  className="border border-red-700 outline-none"  />
      <button onClick={handleWinner} className="border bg-amber-300 text-white p-5">Start</button>
      <button className="border border-amber-200 py-2 px-2 cursor-pointer" onClick={() => dispatch(resetUserPicks())}>
        Reset All Picks
      </button>
      
      
    </div>
  );
};

export default PlayerSelction;
