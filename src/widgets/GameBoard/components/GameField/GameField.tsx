import { TSquare, selectSquares } from "entities/Square"
import { ArrayOfSquares } from "widgets/GameBoard/components/GameField/ArrayOfSquares"
import { useTSelector } from "app/store"
import { SMatrix, SMatrixWrapper } from "."

export const GameField = () => {
    const squares: TSquare[][] = useTSelector(selectSquares)
    return (
        <SMatrixWrapper>
            {squares.map((array: TSquare[], index) => (
                <SMatrix style={{ display: "flex" }} key={index}>
                    <ArrayOfSquares array={array} />
                </SMatrix>
            ))}
        </SMatrixWrapper>
    )
}
