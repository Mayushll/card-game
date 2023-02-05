import React from "react"
import { useDrag } from "react-dnd"
import { TCardInHand, useChangePreview } from "entities/Card"
import { GameCard } from "entities/Card/components/GameCard"
import { SWrapper } from "./CardWrapper.styles"

interface Props {
    card: TCardInHand
}

export const CardWrapper = ({ card }: Props) => {
    const changePreview = useChangePreview()
    const [, dragRef] = useDrag({
        type: `card`,
        item: () => {
            return { ...card }
        },
    })
    return (
        <SWrapper ref={dragRef} onClick={() => changePreview(card)}>
            <GameCard card={card} />
        </SWrapper>
    )
}
