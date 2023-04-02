import { useRef } from "react"
import { TPlayer, selectPlayers } from "entities/Players"
import { Ultimate } from "entities/Ultimate/components/Ultimate/Ultimate"
import { DrawArrowLayout } from "widgets/GameBoard/components/DrawArrowLayout"
import { GameField } from "widgets/GameBoard/components/GameField"
import { SwitchTurnButton } from "widgets/GameBoard/components/SwitchTurnButton/SwitchTurnButton"
import { selectArrowMode } from "widgets/Settings"
import { useTSelector } from "app/store"
import { SWrapper } from "./GameBoard.style"

export function GameBoard() {
    const players = useTSelector(selectPlayers)
    const isArrowModeOn = useTSelector(selectArrowMode)

    const wrapper = useRef<HTMLDivElement>(null)
    return (
        <SWrapper ref={wrapper}>
            {isArrowModeOn && <DrawArrowLayout wrapper={wrapper} />}
            {players.map((player: TPlayer) => (
                <Ultimate id={player.player_id} key={player.player_id} />
            ))}
            {<SwitchTurnButton />}

            <GameField />
        </SWrapper>
    )
}
