import { TCardInBattle } from "entities/Card"
import { changeAttacker } from "features/attack/calculateCardsChanges/changeAttacker/attackerEffects"
import { changeTarget } from "features/attack/calculateCardsChanges/changeTarget/changeTarget"
import { doBuffs } from "features/attack/calculateCardsChanges/doBuffs/doBuffs"

interface Props {
    target: TCardInBattle
    attacker: TCardInBattle
}

export function calculateCardsChanges({ target, attacker }: Props) {
    let newTarget = changeTarget({ target, attacker })
    let newAttacker = changeAttacker(attacker)

    const { buffedTarget, buffedAttacker } = doBuffs({
        target: newTarget,
        attacker: newAttacker,
    })

    return { newTarget: buffedTarget, newAttacker: buffedAttacker }
}
