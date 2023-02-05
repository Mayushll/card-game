import { AdditionalDamage } from "entities/Card/modules/AttackEffects/dispatcher/AdditionalDamage/AdditionalDamage"
import { LifeDrain } from "entities/Card/modules/AttackEffects/dispatcher/Vampirism/Vampirism"
import { TAttackEffects, TAttackEffectsList } from "../types/types"

const AttackerEffects: TAttackEffects = {
    lifeDrain: LifeDrain,
    additionalDamage: AdditionalDamage,
}

export function createAttackerEffects(name: TAttackEffectsList) {
    return AttackerEffects[name]
}
