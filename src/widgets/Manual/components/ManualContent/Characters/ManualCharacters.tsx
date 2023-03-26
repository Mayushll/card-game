import { TNames } from "entities/Card"
import { LeftPanel } from "widgets/Manual/components/ManualContent/Characters/LeftPanel/LeftPanel"
import { MiddlePanel } from "widgets/Manual/components/ManualContent/Characters/MiddlePanel/MiddlePanel"
import { RightPanel } from "widgets/Manual/components/ManualContent/Characters/RightPanel/RightPanel"
import { TManual } from "widgets/Manual/types/types"
import { SWrapper } from "./ManualCharacters.style"

interface Props {
    manual: TManual
    changeItem: (item: TNames) => void
}

export const ManualCharacters = ({ manual, changeItem }: Props) => {
    return (
        <SWrapper>
            <LeftPanel manual={manual} />
            <MiddlePanel manual={manual} changeItem={changeItem} />
            <RightPanel manual={manual} />
        </SWrapper>
    )
}
