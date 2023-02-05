import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCardInProfile, TCardInfo, allCardsData } from "entities/Card"
import { TPage } from "widgets/StartMenu/types/types"
import { RootState } from "app/store"

interface ProfileState {
    page: TPage
    cardPool: TCardInProfile[]
    chosenCardPool: TCardInProfile[]
}

function createProfilePool(cards: TCardInfo[]) {
    return cards.map((card: TCardInfo) => {
        return { ...card, isSelected: true }
    })
}

const initialState: ProfileState = {
    page: "start",
    cardPool: [],
    chosenCardPool: createProfilePool(allCardsData),
}

export const slice = createSlice({
    name: "Profile",
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
        setPage: (state: Draft<ProfileState>, action: PayloadAction<TPage>) => {
            state.page = action.payload
        },
    },
})

export const selectPage = (state: RootState) => state.profile.page
export const selectCardPool = (state: RootState) => state.profile.cardPool
export const selectChosenCardPool = (state: RootState) => state.profile.chosenCardPool
export const { selectCard, removeCard, setPage } = slice.actions
export const ProfileSlice = slice.reducer
