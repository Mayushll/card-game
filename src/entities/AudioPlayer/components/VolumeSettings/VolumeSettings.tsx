import { Volume } from "entities/AudioPlayer/components/VolumeSettings/Volume/Volume"

export const VolumeSettings = () => {
    return (
        <div>
            <Volume type={"general"} />
            <Volume type={"background"} />
            <Volume type={"sounds"} />
        </div>
    )
}
