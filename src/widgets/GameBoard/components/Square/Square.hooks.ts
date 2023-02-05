import { useDrag } from "react-dnd"
import { selectPlayer } from "entities/Players"
import { TSquare } from "entities/Square/types/types"
import { useTSelector } from "app/store"

export function useDragSquare(square: TSquare) {
    const player = useTSelector(selectPlayer(square.card?.player_id))
    const [, dragRef] = useDrag({
        type: `card`,
        item: () => {
            return { ...square, turn: player?.turn }
        },
    })
    return { dragRef }
}
