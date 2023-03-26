import { TFightAbility } from "entities/Card/modules/Abilities/FightAbilities/types/types"
import { TCardInBattle } from "entities/Card/types/types"

export type TSummonAbility = ({ card }: EffectsProps) => TCardInBattle

export type TSummonAbilities = {
    first_shield: TSummonAbility
}

export type TSummonAbilitiesList = keyof TSummonAbilities

export type EffectsProps = {
    card: TCardInBattle
}
