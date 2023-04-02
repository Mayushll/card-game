import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TPage } from "widgets/StartMenu/types/types"
import { RootState } from "app/store"

interface ProfileState {
    page: TPage
}

const initialState: ProfileState = {
    page: "start",
}

export const slice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        setPage: (state: Draft<ProfileState>, action: PayloadAction<TPage>) => {
            console.log("123")
            state.page = action.payload
        },
    },
})

export const selectPage = (state: RootState) => state.profile.page
export const { setPage } = slice.actions
export const ProfileSlice = slice.reducer
