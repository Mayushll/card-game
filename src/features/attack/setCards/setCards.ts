import { cardDeath } from "entities/Card"
import { addCardInHand, removeFractions } from "entities/Players"
import { setSquare } from "entities/Square/state/state"
import { TSquare } from "entities/Square/types/types"
import { AppDispatch } from "app/store"

interface Props {
    newTargetSquare: TSquare
    newAttackerSquare: TSquare
    dispatch: AppDispatch
}

export function setCards({ newTargetSquare, newAttackerSquare, dispatch }: Props) {
    setTarget(newTargetSquare, dispatch)
    setAttacker(newAttackerSquare, dispatch)
}
function setTarget(target: TSquare, dispatch: AppDispatch) {
    if (target.card && target.card?.current_hp > 0) {
        dispatch(setSquare({ x: target.x, y: target.y, card: target.card }))
    } else {
        killCard(target, dispatch)
    }
}
function setAttacker(attacker: TSquare, dispatch: AppDispatch) {
    dispatch(setSquare({ x: attacker.x, y: attacker.y, card: attacker.card }))
}
function killCard(target: TSquare, dispatch: AppDispatch) {
    if (target.card) {
        dispatch(setSquare({ x: target.x, y: target.y, card: null }))
        dispatch(addCardInHand(target.card))
        cardDeath(target.card.name, target.card, dispatch)
        if (target.card.fraction) {
            dispatch(removeFractions({ player_id: target.card.player_id, fraction: target.card.fraction }))
        }
    }
}
