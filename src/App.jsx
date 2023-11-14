import { useState } from "react";
import { Square } from "./components/Square";

const turns = { x: 'X', o: 'O' }
const stateGame = {
  winnerX: 'Ganó el jugador X',
  winnerO: 'Ganó el jugador O',
  empate: 'El juego se empato',
}
const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.x)
  const [winner, setWinner] = useState(null)

  const checkWinner = (checkBoard) => {
    for(const combo of winnerCombos) {
      const [a, b, c] = combo
      console.log(checkBoard[a], checkBoard[b], checkBoard[c])
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

  const updateBoard = (indexChild) => {
    if (board[indexChild] || winner) return
    const newTurn = turn === turns.x ? turns.o : turns.x
    let newBoard = [...board]
    newBoard[indexChild] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    const isWinner = checkWinner(newBoard)
    if(isWinner) setWinner(isWinner)
  }

  return (
    <>
      <main className="board">
        <h1>Triki</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  stateSquare={_}
                  updateBoard={updateBoard}
                />
              )
            })
          }
        </section>
        <section className="turn">
          <Square
            isSelected={turn === turns.x}
            stateSquare={turns.x}
          />
          <Square
            isSelected={turn === turns.o}
            stateSquare={turns.o}
          />
        </section>
        {winner}
      </main>
    </>
  )
}

export default App
