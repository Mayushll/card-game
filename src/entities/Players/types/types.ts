import { TBuffsMembers } from "entities/Buffs"
import { TCardInBattle, TCardInHand } from "entities/Card"

export type TFractionNames = "Hololive"

export interface TFraction {
    name: TFractionNames
    count: number
    neededCount: number
}

export type TPlayerIdType = 1 | 2

export interface TPlayer {
    cardPool: TCardInHand[]
    cardsInHand: TCardInHand[]
    cardsInBattle: TCardInBattle[]
    color: string
    player_id: TPlayerIdType
    gold: number
    power: number
    buffs: TBuffsMembers[]
    fractions: TFraction[]

    turn: boolean
}
