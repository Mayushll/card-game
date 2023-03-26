import { firstShield } from "entities/Card/modules/Abilities/SummonAbilities/dispatcher/firstShield/firstShield"
import { TSummonAbilities, TSummonAbilitiesList } from "entities/Card/modules/Abilities/SummonAbilities/types/types"
import { TAnyAbilitiesKeys } from "entities/Card/modules/Abilities/types"

const TargetEffects: TSummonAbilities = {
    first_shield: firstShield,
}

export function createSummonEffects(name: TAnyAbilitiesKeys) {
    if (TargetEffects.hasOwnProperty(name)) {
        return TargetEffects[name as TSummonAbilitiesList]
    } else {
        return false
    }
}
