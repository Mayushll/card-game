import { Artoria_Ultimate } from "features/ultimate//dispatcher/Artoria/Artoria"
import { Jeanne_Dark_Ultimate } from "features/ultimate//dispatcher/Jeanne_Dark/Jeanne_Dark"
import { Kiyohime_Ultimate } from "features/ultimate//dispatcher/Kiyohime/Kiyohime"
import { Nero_Ultimate } from "features/ultimate//dispatcher/Nero/Nero"
import { TUltimateSlide } from "features/ultimate//modules/types/types"
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
