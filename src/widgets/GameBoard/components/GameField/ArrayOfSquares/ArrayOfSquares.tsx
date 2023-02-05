import { TSquare } from "entities/Square"
import { Square } from "widgets/GameBoard/components/Square"

interface Props {
    array: TSquare[]
}

export const ArrayOfSquares = ({ array }: Props) => {
    return (
        <>
            {array.map((square: TSquare) => (
                <Square square={square} key={square.id} />
            ))}
        </>
    )
}
