import { useRef } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { CardPreview } from "entities/Card/components/CardPreview"
import { Settings } from "widgets/Settings"
import { GameWrapper } from "pages/Board"
import { Profile } from "pages/Profile"
import { useStartGame } from "app/hooks/useStartGame"
import { SAnimation, SImage } from "."
import s from "./index.module.css"

const background = require(`assets/background/background.webp`)

export const Wrapper = () => {
    const wrapper = useRef<HTMLDivElement>(null)

    const { isStarted, quit, start } = useStartGame(wrapper)

    return (
        <div className={s.wrapper} ref={wrapper}>
            <Settings />
            <CardPreview />
            <SImage src={background} alt={"back"} />
            <SwitchTransition mode={"out-in"}>
                <CSSTransition key={`${isStarted}`} timeout={200} classNames="fade">
                    <SAnimation>{isStarted ? <GameWrapper quit={quit} /> : <Profile start={start} />}</SAnimation>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}
