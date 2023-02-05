import { CardList } from "entities/Card/components/CardList"
import { TPlayer, TPlayerIdType } from "entities/Players"
import { BuffsList } from "widgets/PlayerHand/components/BuffsList/BuffsList"
import { useFractions } from "widgets/PlayerHand/components/PlayerHand.hooks"
import { useTSelector } from "app/store"
import { CardWrapper } from "./CardWrapper"
import { SCards, SGold } from "./PlayerHand.style"

interface Props {
    id: TPlayerIdType
}

export const PlayerHand = ({ id }: Props) => {
    const player: TPlayer = useTSelector((state) => state.players.Players.find((player: TPlayer) => player.player_id === id))!
    useFractions(player)
    return (
        <SCards>
            <BuffsList player={player} />
            <SGold>{player.gold}</SGold>
            <CardList list={player.cardsInHand} CardComponent={CardWrapper} />
        </SCards>
    )
}
