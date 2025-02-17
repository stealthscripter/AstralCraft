import { useSelector } from "react-redux";
import { RootState } from "../store";

const variables = ["desto", "finger", "caw", "cawter", "oli"];
const userPick = ["desto" , "finger"]
const computerPick = ["caw" , "cawter"]

export default function calculateFinger(
  playerFinger: number,
  computerFinger: number
): number {
  return (playerFinger + computerFinger) % 5 === 0
    ? 5
    : (computerFinger + playerFinger) % 5;
}


export function calculateWinner(totalFinger: number):any {
        return variables[totalFinger - 1]
}
