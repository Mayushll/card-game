import React from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { CardPoolConfig } from "widgets/CardPoolConfig/components/CardPoolConfig"
import { Manual } from "widgets/Manual/components/Manual"
import { StartMenu } from "widgets/StartMenu"
import { selectPage } from "pages/Profile/state/state"
import { useTSelector } from "app/store"
import { SAnimation } from "./Profile.style"

interface Props {
    start: () => void
}

export const Profile = ({ start }: Props) => {
    const page = useTSelector(selectPage)

    function getPage() {
        switch (page) {
            case "start":
                return <StartMenu start={start} />
            case "storage":
                return <CardPoolConfig />
            case "faq":
                return <Manual />
            default:
                return <></>
        }
    }

    return (
        <SwitchTransition mode={"out-in"}>
            <CSSTransition timeout={150} key={page} classNames="fade">
                <SAnimation>{getPage()}</SAnimation>
            </CSSTransition>
        </SwitchTransition>
    )
}
