import { cloneDeep } from "lodash"
import { TCardInBattle } from "entities/Card"
import { HololiveBuff } from "entities/Card/modules/Buffs/Buffs/HololiveBuff"
import { TexasBuff } from "entities/Card/modules/Buffs/Buffs/TexasBuff"
import { TBuffsMembers } from "entities/Card/modules/Buffs/types/types"

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
