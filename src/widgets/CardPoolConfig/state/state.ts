import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCardInProfile, TCardInfo, allCardsData } from "entities/Card"
import { RootState } from "app/store"

interface ProfileState {
    cardPool: TCardInProfile[]
    chosenCardPool: TCardInProfile[]
}
function createProfilePool(cards: TCardInfo[]) {
    return cards.map((card: TCardInfo) => {
        return { ...card, isSelected: true }
    })
}

const initialState: ProfileState = {
    cardPool: [],
    chosenCardPool: createProfilePool(allCardsData),
}

export const slice = createSlice({
    name: "CardPool",
    initialState,
    reducers: {
        selectCard: (state: Draft<ProfileState>, action: PayloadAction<TCardInfo>) => {
            state.cardPool = state.cardPool.filter((card) => card.name !== action.payload.name)
            state.chosenCardPool.push({ ...action.payload, isSelected: true })
        },
        removeCard: (state: Draft<ProfileState>, action: PayloadAction<TCardInfo>) => {
            state.chosenCardPool = state.chosenCardPool.filter((card) => card.name !== action.payload.name)
            state.cardPool.push({ ...action.payload, isSelected: false })
        },
    },
})

export const selectCardPool = (state: RootState) => state.cardPool.cardPool
export const selectChosenCardPool = (state: RootState) => state.cardPool.chosenCardPool
export const { selectCard, removeCard } = slice.actions
export const CardPoolSlice = slice.reducer
