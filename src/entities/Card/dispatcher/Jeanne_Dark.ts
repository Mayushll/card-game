import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "_shared/AudioPlayer/AudioPlayer"
import { Character } from "entities/Card/helpers/helpers"
import { TCard } from "entities/Card/types/types"

export function Jeanne_Dark(): TCard {
    const name = "Jeanne_Dark"
    const src = Character.getSrc(name)
    function attack() {
        Tracks.Sounds.changeAudio(`${src}/attack${getRandomInt(1, 2)}`)
    }
    function death() {
        Tracks.Death.changeAudio(`${src}/death${getRandomInt(1, 2)}`)
    }
    function summon() {
        Tracks.Sounds.changeAudio(`assets/characters/${name}/summon`)
    }

    return { attack, death, summon }
}
