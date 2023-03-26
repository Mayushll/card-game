import { FightAbilitiesLocale } from "entities/Card/modules/Abilities/FightAbilities/localization/localization"
import { SummonAbilitiesLocale } from "entities/Card/modules/Abilities/SummonAbilities/localization/localization"
import { TNames } from "entities/Card/types/types"

export type TCardNamesLocale = Record<TNames, string>

export const CardsLocale: TCardNamesLocale = {
    Kiyohime: "Kiyohime",
    Jeanne_Dark: "Jeanne Dark",
    Fubuki: "Fubuki",
    Matsuri: "Matsuri",
    DAN: "Dead Apostle Noel",
    Texas: "Texas",
    Nero: "Nero Claudius",
    Artoria: "Artoria Saber",
}
export const AbilitiesLocale = { ...FightAbilitiesLocale, ...SummonAbilitiesLocale }
