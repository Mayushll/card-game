import { useDrag } from "react-dnd"
import { TCardInBattle } from "entities/Card"
import { useChangePreview } from "entities/Card"
import { GameCard } from "entities/Card/components/GameCard"
import { TPlayer } from "entities/Players"
import { useTSelector } from "app/store"
import { StyledCard, useIsOnBoard } from "."

interface Props {
    card: TCardInBattle
}

export const CardWrapper = ({ card }: Props) => {
    const player = useTSelector((state) => state.players.Players).find((item: TPlayer) => item.player_id === card.player_id)!
    const isAlreadyOnBoard = useIsOnBoard(card)
    const changePreview = useChangePreview()
    const [, dragRef] = useDrag({
        type: `card`,
        item: () => {
            return { card: card, player: player, turn: player?.turn }
        },
        canDrag: () => {
            let isEnoughMoney = player.gold >= card.price
            return !isAlreadyOnBoard && isEnoughMoney && player.turn
        },
    })
    return (
        <StyledCard isOnBoard={isAlreadyOnBoard} isYourTurn={player.turn} onClick={() => changePreview(card)}>
            <GameCard ref={dragRef} card={card} />
            <div>{card.price}</div>
        </StyledCard>
    )
}
