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
      return { text: win, win: checkBoard[a] }
    }
  }
  if(!checkBoard.includes(null)) {
    return { text: stateGame.empate, win: null }
  }
}

export const saveGameLocalStorage = (newBoard, newTurn) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const saveScoreTableLocalStorage = (newScoreGame) => {
  window.localStorage.setItem('scoreTable', JSON.stringify(newScoreGame))
}

export const resetLocalStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const resetScoreTableLocalStorage = () => {
  window.localStorage.removeItem('scoreTable')
}