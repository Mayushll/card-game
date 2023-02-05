import { TCardInProfile, allCardsData } from "entities/Card"
import { TPlayer, TPlayerIdType } from "entities/Players"

interface Props {
    color: string
    id: TPlayerIdType
}

interface createCardProps {
    player_id: TPlayerIdType
    player_color: string
    cards: TCardInProfile[]
}

export function createCardPools({ player_id, player_color, cards }: createCardProps) {
    const dataCards = allCardsData.filter((cardInfo) => cards.some((card) => card.name === cardInfo.name))
    return dataCards.map((card) => ({
        ...card,
        onBoard: false,
        player_id,
        player_color,
        id: `${player_id}-${card.name}`,
    }))
}

export function createPlayer({ color, id }: Props): TPlayer {
    let gold = 100
    let power = 0

    return {
        cardPool: [],
        cardsInHand: [],
        cardsInBattle: [],
        color: color,
        player_id: id,
        turn: id === 1,

        gold: gold,
        power: power,

        fractions: [
            {
                name: "Hololive",
                count: 0,
                neededCount: 2,
            },
        ],
        buffs: [],
    }
}

const Player1: TPlayer = createPlayer({ color: "#B00000", id: 1 })
const Player2: TPlayer = createPlayer({ color: "#42AAFF", id: 2 })

export const Players = [Player1, Player2]
