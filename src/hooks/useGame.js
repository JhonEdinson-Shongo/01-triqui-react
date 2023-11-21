import { useState } from "react";
import { checkWinner, restLocalStorage, saveGameLocalStorage } from "../logic/logic";
import { turns } from "../constants/constants";

export const useGame = () => {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem('board')
    return boardLocalStorage ? JSON.parse(boardLocalStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    return  turnLocalStorage ? turnLocalStorage : turns.x
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (indexChild) => {
    if (board[indexChild] || winner) return
    const newTurn = turn === turns.x ? turns.o : turns.x
    let newBoard = [...board]
    newBoard[indexChild] = turn
    setBoard(newBoard)
    const isWinner = checkWinner(newBoard)
    if(isWinner) {
      restLocalStorage()
      setWinner(isWinner)
      return
    }
    saveGameLocalStorage(newBoard, newTurn)
    setTurn(newTurn)
  }

  const resetGame = () => {
    restLocalStorage()
    setBoard(Array(9).fill(null))
    setTurn(turns.x)
    setWinner(null)
  }

  return {
    board,
    turn,
    winner,
    updateBoard,
    resetGame,
  }
}