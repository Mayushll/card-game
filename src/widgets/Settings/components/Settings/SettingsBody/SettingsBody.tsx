import { VolumeSettings } from "_shared/AudioPlayer/components/VolumeSettings/VolumeSettings"
import { Checkbox } from "_shared/components/Checkbox/Checkbox"
import { selectArrowMode, switchArrowMode } from "widgets/Settings/state/state"
import { useTDispatch, useTSelector } from "app/store"
import { SOutline, SWrapper } from "../SettingsBody/SettingsBody.style"

interface Props {
    isOpen: boolean
    setIsOpen: any
}

export const SettingsBody = ({ isOpen, setIsOpen }: Props) => {
    const arrowMode = useTSelector(selectArrowMode)
    const dispatch = useTDispatch()

    function setArrowMode() {
        dispatch(switchArrowMode(!arrowMode))
    }

    return (
        <>
            <SWrapper isOpen={isOpen}>
                <Checkbox label={"Управление канвас-стрелками, пока адекватно не работает"} checked={arrowMode} handler={setArrowMode} />
                <VolumeSettings />
            </SWrapper>
            <SOutline onClick={() => setIsOpen(false)} />
        </>
    )
} //fixme костыль с аутлайном убрать
