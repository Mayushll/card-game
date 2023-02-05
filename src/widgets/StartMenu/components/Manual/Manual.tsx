import { useState } from "react"
import { ManualBody } from "widgets/StartMenu/components/Manual/ManualBody/ManualBody"
import { ManualHeader } from "widgets/StartMenu/components/Manual/ManualBody/ManualHeader/ManualHeader"
import { SWrapper } from "./Manual.style"

export type TManualPage = "buffs" | "characters"

export const Manual = () => {
    const [page, setPage] = useState<TManualPage>("characters")

    return (
        <SWrapper>
            <ManualHeader setPage={setPage} page={page} />
            <ManualBody page={page} />
        </SWrapper>
    )
}
