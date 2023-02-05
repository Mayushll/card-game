import { Buffs } from "entities/Buffs/dispatcher/dispatcher"
import { TCardInBattle } from "entities/Card"

type TBuff = {
    (card: TCardInBattle): TCardInBattle
}
export type TBuffsList = typeof Buffs
export type TBuffsMembers = keyof typeof Buffs
