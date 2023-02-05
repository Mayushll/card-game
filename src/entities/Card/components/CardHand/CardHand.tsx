import React, { ComponentType } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { anyCard } from "entities/Card"
import { SAnimationWrapper } from "../CardList/GardList.style"

interface Props {
    list: anyCard[]
    CardComponent: ComponentType<any>
}

export const CardHand = ({ list, CardComponent }: Props) => {
    return (
        <div>
            <TransitionGroup style={{ display: "flex" }}>
                {list.map((card) => (
                    <CSSTransition timeout={500} classNames={"card"} key={card.name} mountOnEnter unmountOnExit>
                        <SAnimationWrapper>
                            <CardComponent card={card} />
                        </SAnimationWrapper>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}
