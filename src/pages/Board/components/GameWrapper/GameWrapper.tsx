import { GameBoard } from "widgets/GameBoard"
import { PlayerHand } from "widgets/PlayerHand/components/PlayerHand"
import { QuitButton } from "pages/Board/components/GameWrapper/QuitButton/QuitButton"

export const GameWrapper = ({ quit }: any) => {
    return (
        <div>
            <QuitButton quit={quit} />
            <PlayerHand id={1} />
            <GameBoard />
            <PlayerHand id={2} />
        </div>
    )
}
