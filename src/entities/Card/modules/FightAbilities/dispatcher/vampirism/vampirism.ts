import { createAttackerEffects } from "entities/Card"
import { TFightAbilityProps, TFightAbilityReturn } from "entities/Card/modules/FightAbilities/types/types"

export function Vampirism({ attacker, target }: TFightAbilityProps): TFightAbilityReturn {
    let newAttacker = createAttackerEffects("lifeDrain")({ card: attacker })
    let newTarget = target

    return { newAttacker, newTarget }
}
