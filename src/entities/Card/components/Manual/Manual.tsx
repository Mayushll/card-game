import { Dispatch, SetStateAction } from "react"
import { SelectingTable } from "entities/Card/components/SelectingTable/SelectingTable"
import { allCardsData } from "entities/Card/data/data"
import { TNames } from "entities/Card/types/types"
import { ManualWrapper } from "./Manual.style"

interface Props {
    setItem: Dispatch<SetStateAction<TNames>>
    item: TNames
}

export const CardsManual = ({ setItem, item }: Props) => {
    return <ManualWrapper></ManualWrapper>
}
