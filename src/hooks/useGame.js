import { useState } from "react";
import {
  checkWinner,
  resetLocalStorage,
  saveGameLocalStorage,
  saveScoreTableLocalStorage,
  resetScoreTableLocalStorage
} from "../logic/logic";
import { turns, tableScoreGame } from "../constants/constants";
import confetti from "canvas-confetti";

export const useGame = () => {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem('board')
    return boardLocalStorage ? JSON.parse(boardLocalStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    return  turnLocalStorage ? turnLocalStorage : turns.x
  })
  const [scoreGame, setScoreGame] = useState(() => {
    const scoreGameLocalStorage = window.localStorage.getItem('scoreTable')
    return  scoreGameLocalStorage ? JSON.parse(scoreGameLocalStorage) : tableScoreGame
  })
  const [mute, setMute] = useState(() => {
    // const muteLocalStorage = window.localStorage.getItem('stateSound')
    // return muteLocalStorage ? JSON.parse(muteLocalStorage) : false
    return false
  })
  const [openConfig, setOpenConfig] = useState(false)

  const [winner, setWinner] = useState(null)

  const updateBoard = (indexChild) => {
    if (board[indexChild] || winner) return
    const newTurn = turn === turns.x ? turns.o : turns.x
    let newBoard = [...board]
    newBoard[indexChild] = turn
    setBoard(newBoard)
    const isWinner = checkWinner(newBoard)
    if(isWinner) {
      resetLocalStorage()
      setWinner(isWinner.text)
      let newScoreGame = scoreGame
      if(isWinner.win) {
        newScoreGame[isWinner.win === turns.x ? 'winnerX' : 'winnerO']  += 1
      } else {
        newScoreGame.empate += 1
      }
      setScoreGame(newScoreGame)
      saveScoreTableLocalStorage(newScoreGame)
      confetti()
      return
    }
    saveGameLocalStorage(newBoard, newTurn)
    setTurn(newTurn)
  }

  const resetGame = () => {
    resetLocalStorage()
    setBoard(Array(9).fill(null))
    setTurn(turns.x)
    setWinner(null)
  }

  const restoreScoreTable = () => {
    resetScoreTableLocalStorage()
    setScoreGame(tableScoreGame)
  }

  const changeStateMusic = () => {
    window.localStorage.setItem('stateSound', !mute)
    setMute(!mute)
  };

  const toggleConfig = () => {
    setOpenConfig(!openConfig)
  }

  return {
    board,
    turn,
    winner,
    scoreGame,
    mute,
    openConfig,
    updateBoard,
    resetGame,
    restoreScoreTable,
    changeStateMusic,
    toggleConfig,
  }
}