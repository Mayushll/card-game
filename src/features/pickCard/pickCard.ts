import { flushSync } from "react-dom"
import { TCardInBattle, cardSummon } from "entities/Card"
import { createFightAbility } from "entities/Card/modules/Abilities/FightAbilities"
import { createSummonEffects } from "entities/Card/modules/Abilities/SummonAbilities"
import { addFractions, addGold, removeCardFromHand } from "entities/Players"
import { setSquare } from "entities/Square"
import { AppDispatch } from "app/store"

export const pickCard = (card: TCardInBattle, x: number, y: number) => (dispatch: AppDispatch) => {
    cardSummon(card.name, card, dispatch)

    let cardOnBoard: TCardInBattle = { ...card, onBoard: true, buffs: [], current_hp: card.max_hp, attackPoints: 1, movePoints: 1 }
    let applyBuff = createSummonEffects(card.abilities[0])
    if (cardOnBoard.fraction) {
        dispatch(addFractions({ player_id: cardOnBoard.player_id, fraction: cardOnBoard.fraction }))
    }

    dispatch(removeCardFromHand(card))
    dispatch(addGold({ value: -cardOnBoard.price, player_id: cardOnBoard.player_id }))

    if (applyBuff) {
        cardOnBoard = applyBuff({ card: cardOnBoard })
    }
    dispatch(setSquare({ card: cardOnBoard, x: x, y: y }))
    dispatch(setSquare({ card: cardOnBoard, x: x, y: y }))
}
