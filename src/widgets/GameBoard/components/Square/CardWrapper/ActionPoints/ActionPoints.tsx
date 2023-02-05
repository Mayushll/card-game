import { AttackPoints } from "widgets/GameBoard/components/Square/CardWrapper/ActionPoints/AttackPoints"
import { MovePoints } from "widgets/GameBoard/components/Square/CardWrapper/ActionPoints/MovePoints"
import { SWrapper } from "."

interface Props {
    movePoints: number
    attackPoints: number
}

export const ActionPoints = ({ movePoints, attackPoints }: Props) => {
    return (
        <SWrapper>
            <MovePoints fill={movePoints ? "green" : "red"} />
            <AttackPoints fill={attackPoints ? "green" : "red"} />
        </SWrapper>
    )
}
