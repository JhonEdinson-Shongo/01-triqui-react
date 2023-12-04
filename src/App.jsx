import { Square } from "./components/Square";
import { StatusGame } from "./components/StatusGame";
import { ScoreTable } from "./components/ScoreTable";
import { turns, stateGame } from "./constants/constants";
import { useGame } from "./hooks/useGame";


function App() {
  const {
    board,
    turn,
    winner,
    scoreGame,
    updateBoard,
    resetGame,
    restoreScoreTable,
  } = useGame()

  return (
    <>
      <main className="board">
        <h1>triqui game</h1>
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
        <section>
          <button style={{width: 'calc(50% - .5rem)', margin: '1rem .5rem 1rem 0'}} onClick={resetGame}>
            Nuevo juego
          </button>
          <button style={{width: 'calc(50% - .5rem)', margin: '1rem 0 1rem .5rem'}} onClick={restoreScoreTable}>
            Restablecer tabla
          </button>
        </section>
        <section>
          <ScoreTable dataScore={scoreGame}/>
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
        
      </main>
    </>
  )
}

export default App
