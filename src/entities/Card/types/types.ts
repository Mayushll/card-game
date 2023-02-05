import { TFightAbilitiesKeys } from "entities/Card/modules/FightAbilities/types/types"
import { TFractionNames } from "entities/Players"
import { AppDispatch } from "app/store"

type TCardInGame = {
    onBoard: boolean
    player_color: string
    player_id: 1 | 2
    id: string
}

type TCardIsSelected = {
    isSelected: boolean
}

type TCardOnBoard = {
    current_hp: number
    bonus_damage: number
    buffs?: string[]
    shield: boolean
    attackPoints: number
    movePoints: number
}

export type TNames = "Kiyohime" | "DAN" | "Jeanne_Dark" | "Nero" | "Texas" | "Fubuki" | "Matsuri" | "Artoria"

export type TCardInfo = {
    name: TNames
    hero_class: string
    max_hp: number
    base_dmg: number
    base_range: number
    abilities: TFightAbilitiesKeys[]
    fraction: TFractionNames | null
    price: number

    publicName: string
}

export type TCardInProfile = TCardInfo & TCardIsSelected
export type TCardInHand = TCardInfo & TCardInGame
export type TCardInBattle = TCardInfo & TCardInGame & TCardOnBoard

export type anyCard = TCardInBattle | TCardInHand | TCardInProfile

export interface TAttackProps {
    target: TCardInBattle
    attacker: TCardInBattle
}

export interface TCard {
    attack({ target, attacker }: TAttackProps, dispatch: AppDispatch | undefined): void
    death(card: TCardInBattle, dispatch: AppDispatch | undefined): void
    summon(card: TCardInBattle, dispatch: AppDispatch | undefined): void
}
