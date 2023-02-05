import { Dispatch, SetStateAction } from "react"
import { TManualPage } from "widgets/StartMenu/components/Manual/Manual"

interface Props {
    setPage: Dispatch<SetStateAction<TManualPage>>
    page: TManualPage
}

const headerLocale = {
    characters: "Персонажи",
    buffs: "Усиления",
}

export const ManualHeader = ({ page, setPage }: Props) => {
    return (
        <div>
            <div>
                <span> {"<"} </span>
                {headerLocale[page]}
                <span> {">"} </span>
            </div>
        </div>
    )
}
