import { createUltimate } from "entities/Ultimate"
import { TUltimateSlide } from "entities/Ultimate"
import { AppDispatch } from "app/store"

export const ultimate =
    ({ name, player_id, visible }: TUltimateSlide) =>
    (dispatch: AppDispatch) => {
        if (name) {
            createUltimate({ name, player_id, visible }, dispatch)
        }
    }
