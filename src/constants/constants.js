export const turns = { x: 'X', o: 'O' }
export const stateGame = {
  winnerX: `Ganó el jugador ${turns.x}`,
  winnerO: `Ganó el jugador ${turns.o}`,
  empate: 'El juego se empato',
}
export const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]