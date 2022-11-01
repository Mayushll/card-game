export interface TCardsData{
    name: string,
    hero_class: string,
    base_hp: number,
    base_dmg: number,
}

export interface TCard extends TCardsData{
    attack(): void,
    defence(): void,
    onBoard: boolean
}
