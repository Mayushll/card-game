import { cloneDeep } from "lodash"
import { TTargetEffect } from "entities/Card/modules/TargetEffects/types/types"
import { TCardInBattle } from "entities/Card/types/types"

interface Props {
    card: TCardInBattle
}
export function getShield({ card }: Props) {
    console.log(card, "card")
    let newCard = cloneDeep(card)
    console.log(newCard)
    return { ...newCard, shield: true }
}
