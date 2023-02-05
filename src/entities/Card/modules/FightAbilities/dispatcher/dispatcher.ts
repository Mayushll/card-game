import { FirstSlash } from "entities/Card/modules/FightAbilities/dispatcher/first_slash"
import { Vampirism } from "entities/Card/modules/FightAbilities/dispatcher/vampirism/vampirism"
import { TFightAbilities, TFightAbilitiesKeys } from "entities/Card/modules/FightAbilities/types/types"

const FightAbilities: TFightAbilities = {
    first_slash: FirstSlash,
    vampirism: Vampirism,
}

export function createFightAbility(name: TFightAbilitiesKeys) {
    return FightAbilities[name]
}
