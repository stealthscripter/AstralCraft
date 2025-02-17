import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { resetComputerPicks, setComputerPick } from "../features/PickSlice";
import calculateFinger from "../utils/GameEngine";

function ComputerSelection() {
  const userPicks = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPicks = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );
  const avaliablePicks = useSelector(
    (state: RootState) => state.picksVariable.picksVariable
  );
  const dispatch = useDispatch<AppDispatch>();
  function handleComputerChoice(): void {
    dispatch(setComputerPick())
  }

  return (
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
      <h1>{calculateFinger(5 , 2)}</h1>
      <div>
        <button
          onClick={handleComputerChoice}
          className="mt-5 border px-2 py-1 border-amber-500"
        >
          Computer Choice
        </button>
        <button
          onClick={() => dispatch(resetComputerPicks())}
          className="mt-5 border px-2 py-1 border-amber-500"
        >
          Reset Choice
        </button>
        
      </div>

    </div>
  );
}

export default ComputerSelection;
