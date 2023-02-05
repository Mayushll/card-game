import { TCardInBattle, cardSummon } from "entities/Card"
import { addFractions, addGold, removeCardFromHand } from "entities/Players"
import { setSquare } from "entities/Square"
import { AppDispatch } from "app/store"

export const pickCard = (card: TCardInBattle, x: number, y: number) => (dispatch: AppDispatch) => {
    cardSummon(card.name, card, dispatch)

    let cardOnBoard: TCardInBattle = { ...card, onBoard: true, buffs: [], current_hp: card.max_hp, attackPoints: 1, movePoints: 1 }

    if (cardOnBoard.fraction) {
        dispatch(addFractions({ player_id: cardOnBoard.player_id, fraction: cardOnBoard.fraction }))
    }

    dispatch(setSquare({ card: cardOnBoard, x: x, y: y }))
    dispatch(removeCardFromHand(card))
    dispatch(addGold({ value: -cardOnBoard.price, player_id: cardOnBoard.player_id }))
}
