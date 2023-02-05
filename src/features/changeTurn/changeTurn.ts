import { TPlayer, addIncome, changeTurn } from "entities/Players"
import { addMoves } from "entities/Square"
import { AppDispatch } from "app/store"

export const switchTurn = (activePlayer: TPlayer) => (dispatch: AppDispatch) => {
    dispatch(changeTurn())
    if (activePlayer?.player_id === 2) {
        dispatch(addIncome(5))
        dispatch(addMoves())
    }
}
