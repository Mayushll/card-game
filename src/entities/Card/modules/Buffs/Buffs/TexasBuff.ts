import { TCardInBattle } from "entities/Card"
import { buffConsts } from "entities/Card/modules/Buffs/consts/consts"

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
