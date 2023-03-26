import { TFightAbilities, TFightAbilitiesKeys } from "entities/Card/modules/Abilities/FightAbilities/types/types"
import { TSummonAbilities, TSummonAbilitiesList } from "entities/Card/modules/Abilities/SummonAbilities"

export type TAnyAbility = TFightAbilities & TSummonAbilities
export type TAnyAbilitiesKeys = keyof TAnyAbility
