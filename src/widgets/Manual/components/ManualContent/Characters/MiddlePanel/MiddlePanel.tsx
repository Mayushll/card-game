import { TNames, cardNames } from "entities/Card"
import { SelectingTable } from "entities/Card/components/SelectingTable/SelectingTable"
import { TManual } from "widgets/Manual/types/types"
import { ManualWrapper } from "./MiddlePanel.style"

interface Props {
    changeItem: (item: TNames) => void
    manual: TManual
}

export const MiddlePanel = ({ manual, changeItem }: Props) => {
    return (
        <ManualWrapper>
            <SelectingTable page={manual.page} rows={3} columns={3} names={cardNames} onClick={changeItem} selectedItem={manual.item} />
        </ManualWrapper>
    )
}
