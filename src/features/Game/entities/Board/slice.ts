import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {TCardsData} from "../Card/types";
import {CreateCard} from "../Card/Card";
import {cardsData} from "../Card/data";
import { TSquare } from "./types";

export interface BoardState {
    Squares: TSquare[]
}

const initialState: BoardState = {
    Squares: [
        {
            id: 1,
            card: null
        },
        {
            id: 2,
            card: null
        },
        {
            id: 3,
            card: null
        },
        {
            id: 4,
            card: null
        },
        {
            id: 5,
            card: null
        },
    ]
}

interface TSetSquare{
    id: number,
    name: string,
}
interface TChangeHP{
    hp: number,
    id: number
}
interface TDeleteCard{
    id: number
}
export const slice = createSlice({
    name: 'squares',
    initialState,
    reducers: {
        setSquare: (state:Draft<BoardState>, action: PayloadAction<TSetSquare>)=>{
            let selectedSquare:TSquare|undefined = state.Squares.find((item:Draft<TSquare>)=>item.id === action.payload.id)
            const selectedStats:TCardsData|undefined = cardsData.find((item:TCardsData) => item.name === action.payload.name)
            if (selectedSquare) {
                selectedSquare.card = CreateCard(selectedStats)
            }
        },
        changeHP: (state:Draft<BoardState>, action: PayloadAction<TChangeHP>)=>{
            let target = state.Squares.find((item)=>item.id === action.payload.id)
            if (target && target.card) {
                target.card.base_hp = action.payload.hp
            }
        },
        deleteCard: (state:Draft<BoardState>, action: PayloadAction<TDeleteCard>)=>{
            let target = state.Squares.find((item)=>item.id === action.payload.id)
            if (target) {
                target.card = null
            }
        },
    },
})
export const { setSquare, changeHP, deleteCard} = slice.actions
export default slice.reducer

