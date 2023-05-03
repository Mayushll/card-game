import { TCardInfo, TNames } from "entities/Card/types/types"

export const allCardsData: TCardInfo[] = [
    {
        name: "Kiyohime",
        hero_class: "lancer",
        max_hp: 70,
        base_dmg: 15,
        base_range: 1,
        abilities: ["first_slash"],
        fraction: null,
        price: 5,
    },
    {
        name: "Artoria",
        hero_class: "lancer",
        max_hp: 5,
        base_dmg: 0,
        base_range: 2,
        abilities: ["first_slash", "vampirism"],
        fraction: "Hololive",
        price: 7,
    },
    {
        name: "Nero",
        hero_class: "saber",
        max_hp: 90,
        base_dmg: 15,
        base_range: 1,
        abilities: ["first_slash"],
        fraction: null,
        price: 7,
    },
    {
        name: "DAN",
        hero_class: "lancer",
        max_hp: 80,
        base_dmg: 25,
        base_range: 1,
        abilities: ["vampirism", "first_slash"],
        fraction: null,
        price: 5,
    },
    {
        name: "Jeanne_Dark",
        hero_class: "ruler",
        max_hp: 70,
        base_dmg: 10,
        base_range: 1,
        abilities: ["first_slash"],
        fraction: null,
        price: 5,
    },
    {
        name: "Texas",
        hero_class: "ruler",
        max_hp: 50,
        base_dmg: 10,
        base_range: 1,
        abilities: ["first_slash"],
        fraction: null,
        price: 5,
    },
    {
        name: "Fubuki",
        hero_class: "archer",
        max_hp: 45,
        base_dmg: 20,
        base_range: 2,
        abilities: ["first_slash"],
        fraction: "Hololive",
        price: 5,
    },
    {
        name: "Matsuri",
        hero_class: "archer",
        max_hp: 50,
        base_dmg: 15,
        base_range: 2,
        abilities: ["first_slash"],
        fraction: "Hololive",
        price: 5,
    },
]
export const cardNames: TNames[] = allCardsData.map((item) => {
    return item.name
})

export function getCardInfo(name: TNames) {
    return allCardsData.find((card: TCardInfo) => card.name === name) || allCardsData[0]
}
