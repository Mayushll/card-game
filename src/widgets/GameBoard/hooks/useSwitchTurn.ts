import { useEffect } from "react"
import { TPlayer } from "entities/Players"
import { addRound } from "entities/Square"
import { switchTurn } from "features/changeTurn/changeTurn"
import { useTDispatch, useTSelector } from "app/store"

export function useSwitchTurn() {
    const dispatch = useTDispatch()
    const activePlayer = useTSelector((state) => state.players.Players).find((player: TPlayer) => player.turn)
    function listenerHandler(e: KeyboardEvent) {
        if (e.code === "KeyS" && activePlayer) {
            doSwitchTurn()
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", listenerHandler)
        return () => {
            document.removeEventListener("keydown", listenerHandler)
        }
    }, [activePlayer])
    const doSwitchTurn = () => {
        if (activePlayer) {
            dispatch(addRound())
            dispatch(switchTurn(activePlayer))
        }
    }
    return { activePlayer, doSwitchTurn }
}
