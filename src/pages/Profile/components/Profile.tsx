import React from "react"
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group"
import { StartMenu } from "widgets/StartMenu"
import { CardPoolConfig } from "widgets/StartMenu/components/CardPoolConfig/CardPoolConfig"
import { Manual } from "widgets/StartMenu/components/Manual/Manual"
import { selectPage } from "widgets/StartMenu/state/state"
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
