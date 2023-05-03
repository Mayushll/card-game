import { createUltimate } from "features/ultimate//dispatcher/dispatcher"
import { TUltimateSlide } from "features/ultimate//modules/types/types"
import { AppDispatch } from "app/store"

export const ultimate =
    ({ name, player_id, visible }: TUltimateSlide) =>
    (dispatch: AppDispatch) => {
        if (name) {
            createUltimate({ name, player_id, visible }, dispatch)
        }
    }
