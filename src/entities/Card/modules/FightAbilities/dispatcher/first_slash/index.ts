import { createAttackerEffects } from "entities/Card"
import { removeAbility } from "entities/Card/modules/FightAbilities/helpers/removeAbility"
import { TFightAbilityProps, TFightAbilityReturn } from "entities/Card/modules/FightAbilities/types/types"

export function FirstSlash({ attacker, target }: TFightAbilityProps): TFightAbilityReturn {
    let newAttacker = removeAbility(attacker, "first_slash")
    let newTarget = createAttackerEffects("additionalDamage")({ card: target, value: 25 })

    return { newAttacker, newTarget }
}
