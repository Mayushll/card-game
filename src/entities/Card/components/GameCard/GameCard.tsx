import { ForwardedRef, forwardRef } from "react"
import { TCardInBattle, TCardInHand } from "entities/Card"
import { SCardPicture, SIcon, SWrapper } from "./GameCard.style"

interface Props {
    card: TCardInBattle | TCardInHand
}

export const GameCard = forwardRef(({ card }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const iconSrc = require(`assets/classes/${card.hero_class}/icon.webp`)
    const pictureSrc = require(`assets/characters/${card.name}/picture.webp`)
    return (
        <SWrapper>
            <div ref={ref}>
                <SIcon src={iconSrc} alt={"icon"} />
                <SCardPicture draggable="false" src={pictureSrc} alt={card.name} />
            </div>
        </SWrapper>
    )
})
