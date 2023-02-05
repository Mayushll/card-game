import { TSquare } from "entities/Square"
import { Attack } from "features/attack/attack"
import { Move } from "features/move/move"
import { pickCard } from "features/pickCard/pickCard"
import { DroppingItem } from "widgets/GameBoard/hooks/useCardDrop/useCardDrop"
import { AppDispatch } from "app/store"

interface Props {
    item: DroppingItem
    target: TSquare
    dispatch: AppDispatch
}
export function onDrop({ item, dispatch, target }: Props) {
    if ("player" in item) {
        if (item.card && !item.card?.onBoard) {
            dispatch(pickCard(item.card, target.x, target.y))
        }
    } else {
        if (target.card && item.card && item.card.attackPoints > 0) {
            Attack({ target, attacker: item }, dispatch)
        } else {
            Move({ target: target, attacker: item }, dispatch)
        }
    }
}
