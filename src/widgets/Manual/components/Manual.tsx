import { useMemo, useState } from "react"
import { TNames } from "entities/Card"
import { ManualCharacters } from "widgets/Manual/components/ManualContent/Characters/ManualCharacters"
import { ManualHeader } from "widgets/Manual/components/ManualHeader/ManualHeader"
import { TManual } from "widgets/Manual/types/types"
import { SWrapper } from "./Manual.style"

export const PagesList = ["buffs", "characters"] as const
export const Manual = () => {
    const [manual, setManual] = useState<TManual>({ page: "characters", item: "Kiyohime" })

    const pageIndex = useMemo(() => {
        return PagesList.indexOf(manual.page)
    }, [manual])

    function changePage(index: number) {
        const lastIndex = PagesList.length - 1
        let newIndex = index

        if (index < 0) {
            newIndex = 0
        } else if (index > lastIndex) {
            newIndex = 0
        }

        let page = PagesList[newIndex]
        let item: TNames = "Kiyohime"
        setManual({ page: page, item: item })
    }

    function changeItem(item: TNames) {
        setManual({ ...manual, item: item })
    }

    return (
        <SWrapper>
            <ManualHeader changePage={changePage} manual={manual} pageIndex={pageIndex} />
            <ManualCharacters changeItem={changeItem} manual={manual} />
        </SWrapper>
    )
}
