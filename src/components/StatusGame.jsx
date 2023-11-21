import { Square } from "./Square";

export const StatusGame = ({textStatus, status, winner, resetGame}) => {
  return (
    <section className="winner">
      <div className="text">
        <h2>
          {status ? textStatus : 'Empate'}
        </h2>
        { status &&
          <header className="win">
            <Square stateSquare={winner}></Square>
          </header>
        }
        <footer>
          <button onClick={resetGame}>
            Empezar de nuevo
          </button>
        </footer>
      </div>
    </section>
  )
}