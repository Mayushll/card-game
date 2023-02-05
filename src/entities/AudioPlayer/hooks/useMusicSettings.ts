import { useEffect } from "react"
import { Tracks } from "entities/AudioPlayer/AudioPlayer"
import { changeVolumeLevel } from "entities/AudioPlayer/state/state"
import { TVoiceSettings, TVolumeLevelKeys } from "entities/AudioPlayer/types/types"
import { useTDispatch, useTSelector } from "app/store"

export function useMusicSettings() {
    let settings = useTSelector((state) => state.volume.settings.volumeLevel)
    let { general, sounds, background } = settings

    const dispatch = useTDispatch()

    useEffect(() => {
        let voiceSettingsFromStore: TVoiceSettings = {
            background: localStorage.getItem("background"),
            general: localStorage.getItem("general"),
            sounds: localStorage.getItem("sounds"),
        }
        const voiceSettings = Object.entries(voiceSettingsFromStore).map(([key, value]) => ({ type: key as TVolumeLevelKeys, value: Number(value) }))

        voiceSettings.forEach((setting) => {
            dispatch(changeVolumeLevel(setting))
        })
    }, [])

    useEffect(() => {
        Tracks.Sounds.changeVolume(sounds * general)
        Tracks.Attacks.changeVolume(sounds * general)
        Tracks.Moves.changeVolume(sounds * general)
        Tracks.Death.changeVolume(sounds * general)
        Tracks.Ultimate[1].changeVolume(sounds * general)
        Tracks.Ultimate[2].changeVolume(sounds * general)
    }, [sounds, general])
    useEffect(() => {
        Tracks.BackgroundMusic.changeVolume(background * general)
    }, [background, general])
} //fixme выгляит убого
