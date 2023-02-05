import { TCardInBattle } from "entities/Card"

export interface TSquare {
    id?: number
    card: TCardInBattle | null
    type: string | null
    x: number
    y: number
    turn?: boolean
}
