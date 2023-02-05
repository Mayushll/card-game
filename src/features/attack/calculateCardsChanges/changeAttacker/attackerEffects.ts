import { cloneDeep } from "lodash"
import { TCardInBattle } from "entities/Card"

export function changeAttacker(attacker: TCardInBattle) {
    let card = cloneDeep(attacker)
    if (card.attackPoints > 0) {
        card.attackPoints = card.attackPoints - 1
        card.movePoints = 0
    }
    return card
}
