import { TFightAbility } from "entities/Card/modules/Abilities/FightAbilities/types/types"
import { TCardInBattle } from "entities/Card/types/types"

export type TTargetEffect = ({ card, value }: EffectsProps) => TCardInBattle

export type TTargetEffects = {
    getShield: TFightAbility
}

export type TTargetEffectsList = keyof TTargetEffects

export type EffectsProps = {
    card: TCardInBattle
    value?: number
}
