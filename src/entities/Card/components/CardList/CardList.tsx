import { ComponentType } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { anyCard } from "entities/Card"
import { SAnimationWrapper } from "./GardList.style"

interface Props {
    list: anyCard[]
    CardComponent: ComponentType<any>
}

export const CardList = ({ list, CardComponent }: Props) => {
    return (
        <TransitionGroup style={{ display: "flex" }}>
            {list.map((card: anyCard) => (
                <CSSTransition timeout={500} classNames={"card"} key={card.name} mountOnEnter unmountOnExit>
                    <SAnimationWrapper>
                        <CardComponent card={card} />
                    </SAnimationWrapper>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}
