import { GameCard } from "entities/Card/components/GameCard"
import { TSquare } from "entities/Square/types/types"
import { useDragSquare } from "widgets/GameBoard/components/Square/Square.hooks"
import { useBuffs } from "widgets/GameBoard/hooks/useBuffs/useBuffs"
import { useCardDrop } from "widgets/GameBoard/hooks/useCardDrop/useCardDrop"
import { useIncome } from "widgets/GameBoard/hooks/useIncome/useIncome"
import { CardWrapper } from "./CardWrapper"
import { SWrapper } from "./Square.style"

interface Props {
    square: TSquare
}

export const Square = ({ square }: Props) => {
    useBuffs(square)
    useIncome(square)
    const { dragRef } = useDragSquare(square)

    const [canDrop, , dropRef] = useCardDrop(square)
    return (
        <SWrapper ref={dropRef as any} canDrop={canDrop} color={square.card?.player_color} background={square.type}>
            {square.card && (
                <>
                    <CardWrapper card={square.card}>
                        <GameCard ref={dragRef} card={square.card} />
                    </CardWrapper>
                    {/*   <SUltimateIcon color={square.card?.player_color} canDrop={canDrop} src={ultimateIconSrc}/>*/}
                </>
            )}
        </SWrapper>
    )
}
