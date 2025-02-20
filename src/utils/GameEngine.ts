import { useSelector } from "react-redux";
import { RootState } from "../store";

const variables = ["desto", "finger", "caw", "cawter", "oli"];

export default function calculateFinger(
  playerFinger: number,
): number {
  const computerFinger = Math.floor(Math.random() * 11)
  return (playerFinger + computerFinger) % 5 === 0
    ? 5
    : (computerFinger + playerFinger) % 5;
}


export function calculateWinner(totalFinger: number , userPick: string[] , computerPick: string[]):any {
        const winnerFinger = variables[totalFinger - 1]
        if(userPick.includes(winnerFinger)){
            return `${winnerFinger} playe1 Won`
        }
        else if(computerPick.includes(winnerFinger)){
            return `${winnerFinger} Computer Won`
        }
        else return `${winnerFinger}  draw`
}
