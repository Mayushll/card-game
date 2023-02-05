import { TCardInBattle } from "entities/Card/types/types"

export type TAttackEffect = ({ card, value }: EffectsProps) => TCardInBattle

export type TAttackEffects = {
    lifeDrain: TAttackEffect
    additionalDamage: TAttackEffect
}

export type TAttackEffectsList = keyof TAttackEffects

export type EffectsProps = {
    card: TCardInBattle
    value?: number
}
