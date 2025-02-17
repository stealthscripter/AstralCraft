import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserPick, resetUserPicks } from "../features/PickSlice"; // Update import according to your file structure
import { RootState } from "../store";

const VariableChoice: React.FC = () => {
  const dispatch = useDispatch();
  const { picksVariable, userPicks } = useSelector(
    (state: RootState) => state.picksVariable
  );

  
  const variables = ["desto", "finger", "caw", "cawter", "oli"];

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>){
      if(e.target.checked){
          if(userPicks.length >= 2){
            dispatch(setUserPick(userPicks.slice(1).concat(e.target.value)));
          }else{
            dispatch(setUserPick([...userPicks, e.target.value]))
          }
      }else{
        dispatch(setUserPick(userPicks.filter((pick) => pick !== e.target.value)));
      }
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

      <button onClick={() => dispatch(resetUserPicks())}>Reset All Picks</button>
    </div>
  );
};

export default VariableChoice;
