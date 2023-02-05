export type TVoiceSettings = {
    general: string | null
    background: string | null
    sounds: string | null
}

export type TVolumeLevel = {
    general: number
    background: number
    sounds: number
}
export type TVolumeLevelKeys = keyof TVolumeLevel
