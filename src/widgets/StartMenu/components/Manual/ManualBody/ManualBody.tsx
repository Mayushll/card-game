import { useState } from "react"
import { TNames } from "entities/Card"
import { CardsManual } from "entities/Card/components/Manual/Manual"
import { TManualPage } from "widgets/StartMenu/components/Manual/Manual"
import { ManualLeftPanel } from "widgets/StartMenu/components/Manual/ManualBody/ManualLeftPanel/ManualLeftPanel"
import { ManualRightPanel } from "widgets/StartMenu/components/Manual/ManualBody/ManualRightPanel/ManualRightPanel"
import { SWrapper } from "./ManualBody.style"

interface Props {
    page: TManualPage
}

export const ManualBody = ({ page }: Props) => {
    const [item, setItem] = useState<TNames>("Kiyohime")

    return (
        <SWrapper>
            <ManualLeftPanel item={item} page={page} />
            <CardsManual item={item} setItem={setItem} />
            <ManualRightPanel item={item} page={page} />
        </SWrapper>
    )
}
