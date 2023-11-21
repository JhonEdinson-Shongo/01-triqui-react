import { winnerCombos, turns, stateGame } from "../constants/constants";

export const checkWinner = (checkBoard) => {
  for(const combo of winnerCombos) {
    const [a, b, c] = combo
    if(
      checkBoard[a] &&
      checkBoard[a] === checkBoard[b] &&
      checkBoard[b] === checkBoard[c]
    ) {
      const win = checkBoard[a] === turns.x
        ? stateGame.winnerX
        : stateGame.winnerO
      return win
    }
  }
  if(!checkBoard.includes(null)) {
    return stateGame.empate
  }
}

export const saveGameLocalStorage = (newBoard, newTurn) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const restLocalStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}