import { useDrop } from "react-dnd"
import { TCardInProfile } from "entities/Card"
import { removeCard, selectCard, selectCardPool, selectChosenCardPool } from "widgets/CardPoolConfig/state/state"
import { useTDispatch, useTSelector } from "app/store"

interface Props {
    isSelected: boolean
}

export const useSelectCard = ({ isSelected }: Props) => {
    const dispatch = useTDispatch()

    const cards = useTSelector(isSelected ? selectChosenCardPool : selectCardPool)

    const [, dropRef] = useDrop(
        () => ({
            accept: "card",
            drop: (card: TCardInProfile) => {
                dispatch(isSelected ? selectCard(card) : removeCard(card))
            },
            canDrop: (card: TCardInProfile) => {
                return isSelected ? !card.isSelected : card.isSelected
            },
        }),
        []
    )
    return { ref: dropRef, cards: cards }
}
