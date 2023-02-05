import { TCardInBattle } from "entities/Card"
import { createFightAbility } from "entities/Card/modules/FightAbilities"

interface Props {
    target: TCardInBattle
    attacker: TCardInBattle
}

export function doBuffs({ target, attacker }: Props) {
    let newTarget = target
    let newAttacker = attacker

    attacker?.abilities.forEach((ability) => {
        let result: { newTarget: TCardInBattle; newAttacker: TCardInBattle } = createFightAbility(ability)({
            attacker: attacker,
            target: target,
        })
        newTarget = result.newTarget
        newAttacker = result.newAttacker
    })
    return { buffedTarget: newTarget, buffedAttacker: newAttacker }
}
