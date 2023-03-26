import { AdditionalDamage } from "entities/Card/modules/AttackEffects/dispatcher/AdditionalDamage/AdditionalDamage"
import { LifeDrain } from "entities/Card/modules/AttackEffects/dispatcher/Vampirism/Vampirism"
import { getShield } from "entities/Card/modules/TargetEffects/dispatcher/getShield/getShield"
import { TNames } from "entities/Card/types/types"
import { TTargetEffects } from "../types/types"

const TargetEffects: any = {
    getShield: getShield,
}

export function createAttackerEffects(name: any) {
    return TargetEffects[name]
}
