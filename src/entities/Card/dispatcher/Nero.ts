import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "entities/AudioPlayer/AudioPlayer"
import { Character } from "entities/Card/helpers/helpers"
import { TCard } from "entities/Card/types/types"

export function Nero(): TCard {
    const name = "Nero"
    const src = Character.getSrc(name)
    function attack() {
        Tracks.Sounds.changeAudio(`${src}/attack${getRandomInt(1, 3)}`)
    }
    function death() {
        Tracks.Death.changeAudio(`${src}/death${getRandomInt(1, 2)}`)
    }
    function summon() {
        Tracks.Sounds.changeAudio(`${src}/summon`)
    }

    return { attack, death, summon }
}
