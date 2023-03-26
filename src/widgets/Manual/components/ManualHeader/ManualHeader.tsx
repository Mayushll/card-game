import { TManual } from "widgets/Manual/types/types"
import { SWrapper } from "./ManualHeader.style"

interface Props {
    changePage: (index: number) => void
    manual: TManual
    pageIndex: number
}

const headerLocale = {
    characters: "Персонажи",
    buffs: "Усиления",
}

export const ManualHeader = ({ manual, changePage, pageIndex }: Props) => {
    return (
        <SWrapper>
            {/*     <span> {"<"} </span>*/}
            {headerLocale[manual.page]}
            {/*        <span> {">"} </span>*/}
        </SWrapper>
    )
}
