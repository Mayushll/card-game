import { useEffect } from "react"
import { addGold } from "entities/Players"
import { TSquare, selectRound } from "entities/Square"
import { useTDispatch, useTSelector } from "app/store"

export function useIncome(square: TSquare) {
    const dispatch = useTDispatch()

    const round = useTSelector(selectRound)

    useEffect(() => {
        if (square.type === "gold" && square.card && !(round % 2)) {
            let player_id = square.card.player_id
            let value = 1
            dispatch(addGold({ player_id, value }))
        }
    }, [round])
}
