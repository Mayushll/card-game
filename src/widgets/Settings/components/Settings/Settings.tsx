import { useState } from "react"
import { CSSTransition } from "react-transition-group"
import { useMusicSettings } from "_shared/AudioPlayer/hooks/useMusicSettings"
import { SSettingsIcon, SWrapper } from "widgets/Settings/components/Settings/Settings.style"
import { SettingsBody } from "widgets/Settings/components/Settings/SettingsBody/SettingsBody"

export const Settings = () => {
    useMusicSettings()

    const [isOpen, setIsOpen] = useState<boolean>(false)

    function openSettings() {
        setIsOpen((prev) => !prev)
    }

    return (
        <SWrapper>
            <SSettingsIcon isOpen={isOpen} src={require("assets/ui/settings.webp")} alt={"settings"} onClick={openSettings} />
            <CSSTransition in={isOpen} classNames={"settings"} timeout={500} unmountOnExit>
                <SettingsBody isOpen={isOpen} setIsOpen={setIsOpen} />
            </CSSTransition>
        </SWrapper>
    )
}
