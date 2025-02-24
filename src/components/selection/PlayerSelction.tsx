import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  resetPicks,
  resetUserPicks,
  setUserPick,
} from "../../features/PickSlice";

const gridSchema = [
  { picks: "desto" },
  { picks: "finger" },
  { picks: "caw" },
  { picks: "cawter" },
  { picks: "oli" },
];

function PlayerSelction() {
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
  return (
    <section className="grid grid-cols-12 gap-x-5 gap-y-5 ">
      <section className="col-span-12 py-5 flex justify-center">
        <h1 className="text-xl">Player 1 | You</h1>
      </section>
      <section className="mb-6 col-span-12 flex flex-col space-y-2 text-center">
        <h1 className="text-xl">Game Variable </h1>
      </section>
      <section className="col-start-2 col-span-10 gap-x-10 grid grid-cols-3 gap-y-7">
        {gridSchema.map((pick) => (
          <div key={pick.picks} className="border border-amber-700">
            <input
              type="checkbox"
              id={pick.picks}
              value={pick.picks}
              disabled={!picksVariable.includes(pick.picks)}
              onChange={handleCheckbox}
              checked={userPicks.includes(pick.picks)}
              className="peer hidden"
            />
            <label
              htmlFor={pick.picks}
              className={`select-none py-10 cursor-pointer transition-colors duration-200 ease-in-out w-full text-sm tracking-widest
               peer-checked:bg-red-800 peer-checked:text-white flex items-center justify-center ${
                 !picksVariable.includes(pick.picks)
                   ? "bg-blue-800 text-white"
                   : ""
               }`}
            >
              {pick.picks}
            </label>
          </div>
        ))}

        {
        userPick.length >= 1 &&
        <button
            className="border-1 cursor-pointer py-2 text-base px-10 leading-8"
            onClick={() => dispatch(resetUserPicks())}
          >
            Reset Picks
          </button>
        }
      </section>
      <section className="col-start-2 col-span-12 text-sm leading-8">
          <h1>!You Have to choose at most 2 variable to start game</h1>
      </section>
    </section>
  );
}

export default PlayerSelction;
