import { TCardInBattle } from "entities/Card"
import { Buffs } from "entities/Card/modules/Buffs/dispatcher/dispatcher"

type TBuff = {
    (card: TCardInBattle): TCardInBattle
}
export type TBuffsList = typeof Buffs
export type TBuffsMembers = keyof typeof Buffs
