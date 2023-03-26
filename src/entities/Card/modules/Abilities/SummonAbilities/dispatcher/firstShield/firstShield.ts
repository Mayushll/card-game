import { getShield } from "entities/Card/modules/TargetEffects/dispatcher/getShield/getShield"
import { TCardInBattle } from "entities/Card/types/types"

interface Props {
    card: TCardInBattle
}
export function firstShield({ card }: Props) {
    return getShield({ card })
}
