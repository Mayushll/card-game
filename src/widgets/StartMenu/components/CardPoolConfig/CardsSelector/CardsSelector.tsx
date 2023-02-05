import { CardList } from "entities/Card/components/CardList"
import { useSelectCard } from "widgets/StartMenu/hooks/useSelectCard"
import { CardWrapper } from "../CardWrapper/CardWrapper"
import { SWrapper } from "."

type Props = {
    isSelected: boolean
}

export const CardsSelector = ({ isSelected }: Props) => {
    const { ref, cards } = useSelectCard({ isSelected })
    return (
        <SWrapper isSelected={isSelected} ref={ref}>
            <CardList list={cards} CardComponent={CardWrapper} />
        </SWrapper>
    )
}
