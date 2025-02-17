import { useSelector } from "react-redux";
import { RootState } from "../store";

function VariableChoice() {
  const userPicks = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPicks = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );
  const avaliablePicks = useSelector(
    (state: RootState) => state.picksVariable.picksVariable
  );

  const availableChoices = ["desto", "finger", "caw", "cawter", "oli"];

  return (
    <>
    <h1>Chooses</h1>
    {availableChoices.map((choice) => (
        <div key={choice}>
          <input
            type="checkbox"
            value={choice}
          />
          {choice}
        </div>
      ))}
      <div className="flex space-x-4">
        <div>
          <h1>UserPicks</h1>
          {userPicks.map((choice) => (
            <li>{choice}</li>
          ))}
        </div>
        <div>
          <h1>ComputerPicks</h1>
          {computerPicks.map((choice) => (
            <li>{choice}</li>
          ))}
        </div>
        <div>
          <h1>Avaliable Picks</h1>
          {avaliablePicks.map((choice) => (
            <li>{choice}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default VariableChoice;
