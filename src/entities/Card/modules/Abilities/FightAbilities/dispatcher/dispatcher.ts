import { FirstSlash } from "entities/Card/modules/Abilities/FightAbilities/dispatcher/first_slash"
import { Vampirism } from "entities/Card/modules/Abilities/FightAbilities/dispatcher/vampirism/vampirism"
import { TFightAbilities, TFightAbilitiesKeys } from "entities/Card/modules/Abilities/FightAbilities/types/types"
import { TAnyAbilitiesKeys, TAnyAbility } from "entities/Card/modules/Abilities/types"

const FightAbilities: TFightAbilities = {
    first_slash: FirstSlash,
    vampirism: Vampirism,
}

export function createFightAbility(name: TAnyAbilitiesKeys) {
    if (FightAbilities.hasOwnProperty(name)) {
        return FightAbilities[name as TFightAbilitiesKeys]
    } else {
        return false
    }
}
