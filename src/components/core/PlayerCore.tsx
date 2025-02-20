import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import calculateFinger, { calculateWinner } from "../../utils/GameEngine";

function PlayerCore() {
  const [finger , setFinger] = useState<number>(0)
  const userPick = useSelector(
    (state: RootState) => state.picksVariable.userPicks
  );
  const computerPick = useSelector(
    (state: RootState) => state.picksVariable.computerPicks
  );

  function handleStart(){
    console.log("start the game")
    const totalFinger = calculateFinger(finger)
    console.log("total finger", totalFinger)
    console.log(calculateWinner(totalFinger , userPick , computerPick))
  }
  return (
    <section className="grid grid-cols-12 gap-x-5 gap-y-5">
      <section className="border border-amber-800 col-span-12 py-5 flex flex-col justify-center items-center">
        <h1 className="text-xl">Player 1 </h1>
        <h1>USer Picks</h1>
        {userPick.map((pick) => (
          <h1 key={pick} className="text-xl">
            {pick}
          </h1>
        ))}
        <h1>Computer Picks</h1>
        {computerPick.map((pick) => (
          <h1 key={pick} className="text-xl">
            {pick}
          </h1>
        ))}
        <label htmlFor="finger">Set Finger</label>
        <input type="text" id="finger" className="border border-teal-500 mt-10" onChange={(e) => setFinger(Number(e.target.value))} />

        <button className="mt-10 border border-teal-500 px-4 py-2 cursor-pointer hover:bg-red-50" onClick={handleStart}>start the game</button>
      </section>


    </section>
  );
}

export default PlayerCore;
