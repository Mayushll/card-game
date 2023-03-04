import { TCardInBattle } from "entities/Card"
import { calculateDamage } from "features/attack/calculateCardsChanges/calculateDamage/calculateDamage"

interface TAfterAttack {
    target: TCardInBattle
    attacker: TCardInBattle
}

export function changeTarget({ target, attacker }: TAfterAttack) {
    if (target.shield) {
        target = destroyShield(target)
        return target
    }

    const hitpoints: number = calculateDamage(target, attacker) || 0
    target = doDefaultAttack(target, hitpoints)

    return target
}

function doDefaultAttack(target: TCardInBattle, hitpoints: number) {
    return { ...target, current_hp: hitpoints }
}

function destroyShield(target: TCardInBattle) {
    return { ...target, shield: false }
}
