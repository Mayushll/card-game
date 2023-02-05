import { cloneDeep } from "lodash"
import { TBuffsMembers } from "entities/Buffs"
import { HololiveBuff } from "entities/Buffs/Buffs/HololiveBuff"
import { TexasBuff } from "entities/Buffs/Buffs/TexasBuff"
import { TCardInBattle } from "entities/Card"

export const Buffs = {
    Texas: TexasBuff(),
    Hololive: HololiveBuff(),
}

function createBuff(name: string) {
    return Buffs[name as TBuffsMembers]
}

export function addBuff({ buff, card }: { buff: string; card: TCardInBattle }) {
    let newCard = cloneDeep(card)

    newCard = createBuff(buff).add(newCard)
    newCard.buffs?.push(buff)

    return newCard
}

export function removeBuff({ buff, card }: { buff: string; card: TCardInBattle }) {
    let newCard = cloneDeep(card)

    newCard = createBuff(buff).remove(newCard)
    newCard.buffs = newCard?.buffs?.filter((cardBuff) => cardBuff !== buff)

    return newCard
}
