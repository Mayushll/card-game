import { createAttackerEffects } from "entities/Card"
import { TFightAbilityProps, TFightAbilityReturn } from "entities/Card/modules/Abilities/FightAbilities/types/types"

export function Vampirism({ attacker, target }: TFightAbilityProps): TFightAbilityReturn {
    let newAttacker = createAttackerEffects("lifeDrain")({ card: attacker, value: 0.3 })
    let newTarget = target

    return { newAttacker, newTarget }
}
