import { createUltimate } from "entities/Ultimate"
import { TUltimate } from "entities/Ultimate"
import { AppDispatch } from "app/store"

export const ultimate =
    ({ name, player_id, visible }: TUltimate) =>
    (dispatch: AppDispatch) => {
        if (name) {
            createUltimate({ name, player_id, visible }, dispatch)
        }
    }
