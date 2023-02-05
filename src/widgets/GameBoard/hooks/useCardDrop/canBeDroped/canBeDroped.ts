import { TSquare } from "entities/Square/types/types"
import { DroppingItem } from "widgets/GameBoard/hooks/useCardDrop/useCardDrop"

interface canBeDropedProps {
    item: DroppingItem
    target: TSquare
}

export function canBeDroped({ item, target }: canBeDropedProps) {
    const cantMoveWithoutPoints = item.card?.onBoard && !target.card && item.card?.movePoints === 0
    const cantAttackWithoutPoints = item.card?.onBoard && target.card && item.card?.attackPoints === 0
    const isAlreadyEngaged = target.card && !item.card?.onBoard
    const isAttackYourself = target.card?.id === item.card?.id
    const isAttackTeammate = target.card?.player_id === item.card?.player_id
    const isOutOfRange = cantDropOutOfRange(item, target)
    const isYourTurn = item.turn

    return !(isAlreadyEngaged || isAttackYourself || isAttackTeammate || isOutOfRange || !isYourTurn || cantMoveWithoutPoints || cantAttackWithoutPoints)
}

function cantDropOutOfRange(attacker: DroppingItem, target: TSquare) {
    if ("x" in attacker) {
        if (attacker.x === undefined || attacker.y === undefined || attacker.card?.onBoard === false) {
            return false
        }
        let range = target.card ? attacker.card?.base_range : 1
        if (range) {
            let nearByX = target.x <= attacker.x + range && target.x >= attacker.x - range
            let nearByY = target.y <= attacker.y + range && target.y >= attacker.y - range
            return !(nearByX && nearByY)
        }
    }
}
