import {createSlice, Draft} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {cardsData} from "./data";
import {CreateCard} from "./Card";
import {TCard, TCardsData} from "./types";

interface CardsState {
    cardsData: TCardsData[],
    cardsInGame: TCard[]
}

const initialState: CardsState = {
    cardsData: cardsData,
    cardsInGame: []
}

export const slice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state:Draft<CardsState>, action: PayloadAction<string>)=>{
            const selectedStats:TCardsData|undefined = state.cardsData.find((item:TCardsData) => item.name === action.payload)
            const card = CreateCard(selectedStats)
            state.cardsInGame.push(card)
        },
    },
})

export const { addCard } = slice.actions
export default slice.reducer