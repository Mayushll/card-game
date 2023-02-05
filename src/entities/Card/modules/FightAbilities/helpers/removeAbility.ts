import { TCardInBattle } from "entities/Card"

export function removeAbility(card: TCardInBattle, ability: string) {
    return { ...card, abilities: card.abilities.filter((item) => item !== ability) }
}
