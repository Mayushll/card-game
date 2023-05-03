import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TPlayerIdType } from "entities/Players"
import { TUltimateSlide } from "features/ultimate//modules/types/types"
import { RootState } from "app/store"

interface UltimateState {
    ultimates: TUltimateSlide[]
}

const initialState: UltimateState = {
    ultimates: [
        {
            player_id: 1,
            name: null,
            visible: false,
        },
        {
            player_id: 2,
            name: null,
            visible: false,
        },
    ],
}

export const slice = createSlice({
    name: "ultimate",
    initialState,
    reducers: {
        setUltimateScreen: (state: Draft<UltimateState>, action: PayloadAction<TUltimateSlide>) => {
            let ultimate = state.ultimates.find((ultimate) => ultimate.player_id === action.payload.player_id)
            if (ultimate) {
                if (action.payload.name !== undefined) {
                    ultimate.name = action.payload.name
                }
                if (action.payload.visible !== undefined) {
                    ultimate.visible = action.payload.visible
                }
            }
        },
    },
})

export const selectUltimate = (id: TPlayerIdType) => (state: RootState) => state.ultimate.ultimates.find((item) => item.player_id === id)!.name

export const { setUltimateScreen } = slice.actions
export const UltimateSlice = slice.reducer
