import { EffectsProps } from "entities/Card/modules/AttackEffects/index"
import { TCardInBattle } from "entities/Card/types/types"

export function AdditionalDamage({ card, value }: EffectsProps): TCardInBattle {
    if (value) {
        let hp = card.current_hp - value
        return { ...card, current_hp: hp }
    }
    return card
}
