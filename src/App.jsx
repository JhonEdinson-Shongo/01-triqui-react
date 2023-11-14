import { useState } from "react";
import { Square } from "./components/Square";

const turns = { x: 'X', o: 'O' }

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.x)

  const updateBoard = (indexChild) => {
    const newTurn = turn === turns.x ? turns.o : turns.x
    let newBoard = [...board]
    newBoard[indexChild] = turn
    setBoard(newBoard)
    setTurn(newTurn)
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
      </main>
    </>
  )
}

export default App
