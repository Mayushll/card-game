import { useEffect } from "react"
import { TPlayer, addBuffToPlayer, removeBuffFromPlayer } from "entities/Players"
import { useTDispatch } from "app/store"

export function useFractions(player: TPlayer) {
    const dispatch = useTDispatch()

    let player_id = player.player_id

    useEffect(() => {
        player.fractions.forEach((fraction) => {
            let buff = fraction.name
            if (fraction.count >= fraction.neededCount) {
                let isBuffAlreadyExist = player.buffs.find((buff) => buff === fraction.name)
                if (!isBuffAlreadyExist) {
                    dispatch(addBuffToPlayer({ player_id, buff }))
                }
            } else {
                dispatch(removeBuffFromPlayer({ player_id, buff }))
            }
        })
    }, [player.fractions])
}
