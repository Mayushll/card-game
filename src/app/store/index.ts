import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { VolumeSlice } from "entities/AudioPlayer/state/state"
import { PreviewSlice } from "entities/Card"
import { PlayersSlice } from "entities/Players"
import { SquaresSlice } from "entities/Square"
import { UltimateSlice } from "entities/Ultimate"
import { SettingsSlice } from "widgets/Settings"
import { ProfileSlice } from "widgets/StartMenu/state/state"

const baseReducers = {
    players: PlayersSlice,
    squares: SquaresSlice,
    ultimate: UltimateSlice,
    preview: PreviewSlice,
    profile: ProfileSlice,
}

const settingsReducers = {
    settings: SettingsSlice,
    volume: VolumeSlice,
}

export const store = configureStore({
    reducer: {
        ...baseReducers,
        ...settingsReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTDispatch: () => AppDispatch = useDispatch
export const useTSelector: TypedUseSelectorHook<RootState> = useSelector
