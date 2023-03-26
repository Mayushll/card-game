import { RefObject, useEffect, useState } from "react"
import { Tracks } from "_shared/AudioPlayer"
import { prepareCards } from "entities/Players"
import { startGame } from "features/startGame/startGame"
import { selectChosenCardPool } from "widgets/CardPoolConfig/state/state"
import { setPage } from "pages/Profile"
import { useTDispatch, useTSelector } from "app/store"

export function useStartGame(app: RefObject<HTMLDivElement>) {
    const [isStarted, setIsStarted] = useState(false)
    const dispatch = useTDispatch()
    const selectedCards = useTSelector(selectChosenCardPool)

    function startBackgroundMusic() {
        Tracks.BackgroundMusic.changeAudio(`assets/background-music/profile/1`)

        Tracks.BackgroundMusic.getTag().addEventListener("ended", () => {
            Tracks.BackgroundMusic.changeAudio(`assets/background-music/profile/1`)
        })
    }

    useEffect(() => {
        startBackgroundMusic()
        return () => {
            Tracks.BackgroundMusic.getTag().removeEventListener("ended", () => {
                Tracks.BackgroundMusic.changeAudio(`assets/background-music/profile/1`)
            })
        }
    }, [])

    function start() {
        document.querySelector("body")!.requestFullscreen()
        dispatch(prepareCards(selectedCards))
        dispatch(setPage("start"))
        setIsStarted(true)
        startGame()
    }

    function quit() {
        setIsStarted(false)
        startBackgroundMusic()
    }

    return { isStarted, quit, start }
}
