import { TNames } from "entities/Card"

export type TManual = {
    page: TManualPage
    item: TNames
}

export type TManualPage = "buffs" | "characters"
