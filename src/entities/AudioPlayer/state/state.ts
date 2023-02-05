import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TVolumeLevel, TVolumeLevelKeys } from "entities/AudioPlayer/types/types"
import { RootState } from "app/store"

interface AudioPlayerState {
    settings: {
        volumeLevel: TVolumeLevel
    }
}

const initialState: AudioPlayerState = {
    settings: {
        volumeLevel: {
            general: 0.1,
            background: 0.25,
            sounds: 0.25,
        },
    },
}

interface TPayload {
    value: number
    type: TVolumeLevelKeys
}

export const slice = createSlice({
    name: "Volume",
    initialState,
    reducers: {
        changeVolumeLevel: (state: Draft<AudioPlayerState>, action: PayloadAction<TPayload>) => {
            state.settings.volumeLevel[action.payload.type] = action.payload.value / 100
            localStorage.setItem(action.payload.type, action.payload.value.toString())
        },
    },
})

export const selectVolumeLevel = (type: TVolumeLevelKeys) => (state: RootState) => state.volume.settings.volumeLevel[type]

export const { changeVolumeLevel } = slice.actions
export const VolumeSlice = slice.reducer
