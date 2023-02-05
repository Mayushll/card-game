import { useDrop } from "react-dnd"
import { TCardInBattle } from "entities/Card"
import { TPlayer } from "entities/Players"
import { TSquare } from "entities/Square/types/types"
import { canBeDroped } from "widgets/GameBoard/hooks/useCardDrop/canBeDroped/canBeDroped"
import { onDrop } from "widgets/GameBoard/hooks/useCardDrop/onDrop/onDrop"
import { useTDispatch } from "app/store"

export interface CardFromHand {
    card: TCardInBattle
    turn: boolean
    player: TPlayer
}

export type DroppingItem = CardFromHand | TSquare

export function useCardDrop(target: TSquare) {
    const dispatch = useTDispatch()
    const [{ canDrop, isOver }, dropRef] = useDrop(
        () => ({
            accept: "card",
            drop: (item: DroppingItem) => {
                onDrop({ item, dispatch, target })
            },
            canDrop: (item: DroppingItem) => {
                return canBeDroped({ item, target })
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [target]
    )
    return [canDrop, isOver, dropRef]
}
