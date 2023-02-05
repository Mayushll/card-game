import { TCardInBattle } from "entities/Card"

export type TFightAbilityProps = {
    attacker: TCardInBattle
    target: TCardInBattle
}

export type TFightAbilityReturn = {
    newAttacker: TCardInBattle
    newTarget: TCardInBattle
}

export type TFightAbility = ({ attacker, target }: TFightAbilityProps) => TFightAbilityReturn

export type TFightAbilities = {
    first_slash: TFightAbility
    vampirism: TFightAbility
}

export type TFightAbilitiesKeys = keyof TFightAbilities
