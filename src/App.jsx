import { Square } from "./components/Square";
import { StatusGame } from "./components/StatusGame";
import { turns, stateGame } from "./constants/constants";
import { useGame } from "./hooks/useGame";


function App() {
  const {
    board,
    turn,
    winner,
    updateBoard,
    resetGame,
  } = useGame()

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
        {
          winner &&
            <StatusGame
              resetGame={resetGame}
              textStatus={winner}
              status={winner != stateGame.empate}
              winner={turn}
            />
        }
        <button onClick={resetGame}>
          Empezar de nuevo
        </button>
        
      </main>
    </>
  )
}

export default App
