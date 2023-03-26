import { TSummonAbilitiesList } from "entities/Card/modules/Abilities/SummonAbilities/types/types"

export type TSummonAbilitiesLocale = Record<TSummonAbilitiesList, { name: string; description: string }>

export const SummonAbilitiesLocale: TSummonAbilitiesLocale = {
    first_shield: {
        name: "Щит",
        description: "Даёт щит в начале раунда.",
    },
}
