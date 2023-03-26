import { buffConsts } from "entities/Buffs/consts/consts"
import { TCardInBattle } from "entities/Card"

export function TexasBuff() {
    function add(card: TCardInBattle) {
        let bonusDamage = Math.round(card.base_dmg * buffConsts.Texas)
        return { ...card, bonus_damage: bonusDamage }
    }
    function remove(card: TCardInBattle): TCardInBattle {
        return { ...card, bonus_damage: card.bonus_damage - Math.round(card.base_dmg * buffConsts.Texas) }
    }
    return { add, remove }
}
