import { TCardInBattle } from "entities/Card"
import { createFightAbility } from "entities/Card/modules/Abilities/FightAbilities"

interface Props {
    target: TCardInBattle
    attacker: TCardInBattle
}

export function doBuffs({ target, attacker }: Props) {
    let newTarget = target
    let newAttacker = attacker

    attacker?.abilities.forEach((ability) => {
        let applyBuff = createFightAbility(ability)
        if (applyBuff) {
            let result: { newTarget: TCardInBattle; newAttacker: TCardInBattle } = applyBuff({
                attacker: attacker,
                target: target,
            })
            newTarget = result.newTarget
            newAttacker = result.newAttacker
        }
    })

    return { buffedTarget: newTarget, buffedAttacker: newAttacker }
}
