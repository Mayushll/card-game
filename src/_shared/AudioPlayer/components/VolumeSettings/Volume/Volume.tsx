import { changeVolumeLevel, selectVolumeLevel } from "_shared/AudioPlayer/state/state"
import { Range } from "_shared/components/Range/Range"
import { L10n } from "_shared/locale/locale"
import { useTDispatch, useTSelector } from "app/store"
import { SRangeWrapper } from "./Volume.style"

type TRange = {
    type: "general" | "background" | "sounds"
}

export const Volume = ({ type }: TRange) => {
    const dispatch = useTDispatch()
    const value = useTSelector(selectVolumeLevel(type)) * 100

    function handler(value: number) {
        dispatch(changeVolumeLevel({ type: type, value: value }))
    }

    return (
        <SRangeWrapper>
            <Range min={0} max={100} value={value} handler={handler} text={L10n.Volume[type]} />
        </SRangeWrapper>
    )
}
