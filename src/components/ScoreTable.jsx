import { turns } from '../constants/constants'

export const ScoreTable = ({dataScore}) => {
    return (
        <>
            <table className="score-table">
                <thead>
                    <tr>
                        <th colSpan={2}>
                            Score table
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Jugador
                        </td>
                        <td>
                            N° Win
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { turns.x }
                        </td>
                        <td>
                            { dataScore.winnerX }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            { turns.o }
                        </td>
                        <td>
                            { dataScore.winnerO }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Empates
                        </td>
                        <td>
                            { dataScore.empate }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}