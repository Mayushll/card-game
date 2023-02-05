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

        publicName: "Kiyohime", //fixme вынести в локу это свойство
    },
    {
        name: "Artoria",
        hero_class: "saber",
        max_hp: 80,
        base_dmg: 18,
        base_range: 1,
        abilities: ["first_slash"],
        fraction: null,
        price: 7,

        publicName: "Artoria Saber",
    },
    {
        name: "Nero",
        hero_class: "saber",
        max_hp: 90,
        base_dmg: 15,
        base_range: 1,
        abilities: [],
        fraction: null,
        price: 7,

        publicName: "Nero Claudius",
    },
    {
        name: "DAN",
        hero_class: "lancer",
        max_hp: 80,
        base_dmg: 25,
        base_range: 1,
        abilities: ["vampirism"],
        fraction: null,
        price: 5,

        publicName: "Dead Apostle Noel",
    },
    {
        name: "Jeanne_Dark",
        hero_class: "ruler",
        max_hp: 70,
        base_dmg: 10,
        base_range: 1,
        abilities: [],
        fraction: null,
        price: 5,

        publicName: "Jeanne Dark",
    },
    {
        name: "Texas",
        hero_class: "ruler",
        max_hp: 50,
        base_dmg: 10,
        base_range: 1,
        abilities: [],
        fraction: null,
        price: 5,

        publicName: "Texas",
    },
    {
        name: "Fubuki",
        hero_class: "archer",
        max_hp: 45,
        base_dmg: 20,
        base_range: 2,
        abilities: [],
        fraction: "Hololive",
        price: 5,

        publicName: "Shirakami Fubuki",
    },
    {
        name: "Matsuri",
        hero_class: "archer",
        max_hp: 50,
        base_dmg: 15,
        base_range: 2,
        abilities: [],
        fraction: "Hololive",
        price: 5,

        publicName: "Natsuiro Matsuri",
    },
]
export function getCardInfo(name: TNames) {
    return allCardsData.find((card: TCardInfo) => card.name === name)
}
