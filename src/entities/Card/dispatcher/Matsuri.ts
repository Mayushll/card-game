import { Tracks } from "_shared/AudioPlayer/AudioPlayer"
import { Character } from "entities/Card/helpers/helpers"
import { TCard } from "entities/Card/types/types"

export function Matsuri(): TCard {
    const name = "Matsuri"
    const src = Character.getSrc(name)
    function attack() {
        Tracks.Sounds.changeAudio(`${src}/attack`)
    }
    function death() {
        Tracks.Death.changeAudio(`${src}/death`)
    }
    function summon() {
        Tracks.Sounds.changeAudio(`assets/characters/${name}/summon`)
    }

    return { attack, death, summon }
}
