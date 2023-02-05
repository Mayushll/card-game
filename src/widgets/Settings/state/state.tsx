import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "app/store"

type SettingsState = {
    arrowMode: boolean
}

const initialState: SettingsState = {
    arrowMode: false,
}

export const slice = createSlice({
    name: "Settings",
    initialState,
    reducers: {
        switchArrowMode(state: Draft<SettingsState>, action: PayloadAction<boolean>) {
            state.arrowMode = action.payload
        },
    },
})
export const SettingsSlice = slice.reducer

export const selectArrowMode = (state: RootState) => state.settings.arrowMode
export const { switchArrowMode } = slice.actions
