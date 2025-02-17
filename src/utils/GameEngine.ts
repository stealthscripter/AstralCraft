export default function calculateFinger(
  playerFinger: number,
  computerFinger: number
): number {
  return (playerFinger + computerFinger) % 5 === 0
    ? 5
    : (computerFinger + playerFinger) % 5;
}



export function calculateWinner(userPicks: string[] , computerPicks: string[] , totalFinger: number):string[] {
        return ["hello"]
}
