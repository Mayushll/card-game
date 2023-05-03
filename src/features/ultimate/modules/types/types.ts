import { TNames } from "entities/Card"
import { TPlayerIdType } from "entities/Players"

export type TUltimateSlide = {
    name?: TNames | null
    player_id?: TPlayerIdType | null
    visible: boolean
}
