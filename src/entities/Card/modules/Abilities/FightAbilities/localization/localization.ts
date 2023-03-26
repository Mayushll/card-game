import { TFightAbilitiesKeys } from "entities/Card/modules/Abilities/FightAbilities/types/types"

export type TFightAbilitiesLocale = Record<TFightAbilitiesKeys, { name: string; description: string }>

export const FightAbilitiesLocale: TFightAbilitiesLocale = {
    first_slash: {
        name: "First Slash",
        description: "Первая атака персонажа наносит дополнительный урон.",
    },
    vampirism: {
        name: "Vampirism",
        description: "Атаки персонажа восстанавливают его здоровье.",
    },
}
