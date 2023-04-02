import { Artoria_Ultimate } from "entities/Ultimate/dispatcher/Artoria/Artoria"
import { Jeanne_Dark_Ultimate } from "entities/Ultimate/dispatcher/Jeanne_Dark/Jeanne_Dark"
import { Kiyohime_Ultimate } from "entities/Ultimate/dispatcher/Kiyohime/Kiyohime"
import { Nero_Ultimate } from "entities/Ultimate/dispatcher/Nero/Nero"
import { TUltimateSlide } from "entities/Ultimate/modules/types/types"
import { AppDispatch } from "app/store"

export type TUltimatesList = "Kiyohime" | "Jeanne_Dark" | "Nero" | "Artoria"

type TUltimates = Record<TUltimatesList, any>

const Ultimates: TUltimates = {
    Kiyohime: Kiyohime_Ultimate,
    Jeanne_Dark: Jeanne_Dark_Ultimate,
    Nero: Nero_Ultimate,
    Artoria: Artoria_Ultimate,
}

export function createUltimate({ name, player_id, visible }: TUltimateSlide, dispatch: AppDispatch) {
    return Ultimates[name as TUltimatesList]({ name, player_id, visible }, dispatch)
}
