import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getCardInfo } from "entities/Card/data/data"
import { TCardInfo, TNames } from "entities/Card/types/types"
import { RootState } from "app/store"

interface PreviewState {
    preview: TCardInfo | null
}

const initialState: PreviewState = {
    preview: null,
}

export const slice = createSlice({
    name: "Preview",
    initialState,
    reducers: {
        changePreview: (state: Draft<PreviewState>, action: PayloadAction<TNames | null>) => {
            state.preview = action.payload && getCardInfo(action.payload)!
        },
    },
})

export const selectPreview = (state: RootState) => state.preview.preview

export const { changePreview } = slice.actions
export const PreviewSlice = slice.reducer
