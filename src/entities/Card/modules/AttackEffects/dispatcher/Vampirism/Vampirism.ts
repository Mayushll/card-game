import { EffectsProps } from "entities/Card/modules/AttackEffects/index"
import { TCardInBattle } from "entities/Card/types/types"

export function LifeDrain({ card, value }: EffectsProps): TCardInBattle {
    let attackerHP = card.current_hp + Math.round(card.base_dmg * value)
    if (attackerHP > card.max_hp) {
        attackerHP = card.max_hp
    }
    return { ...card, current_hp: attackerHP }
}
