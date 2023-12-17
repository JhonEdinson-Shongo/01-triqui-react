import { useGame } from "./hooks/useGame";
import { turns, stateGame } from "./constants/constants";

import { Square } from "./components/Square";
import { StatusGame } from "./components/StatusGame";
import { ScoreTable } from "./components/ScoreTable";
import { MusicButton } from "./components/MusicButton";
import { ConfigGame } from "./components/ConfigGame";

function App() {
  const {
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
  } = useGame()

  return (
    <>
      <main className="board">
        <header className="config">
          <MusicButton mute={ mute } changeStateMusic={ changeStateMusic } />
          <button className="btn-icon" onClick={ toggleConfig }>
            <img src="./config.svg" alt="image to open config"/>
          </button>
        </header>
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
        {
          openConfig && <ConfigGame toggleConfig={ toggleConfig }/>
        }
      </main>
    </>
  )
}

export default App
