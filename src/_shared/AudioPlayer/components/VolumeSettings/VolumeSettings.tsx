import { Volume } from "_shared/AudioPlayer/components/VolumeSettings/Volume/Volume"

export const VolumeSettings = () => {
    return (
        <div>
            <Volume type={"general"} />
            <Volume type={"background"} />
            <Volume type={"sounds"} />
        </div>
    )
}
