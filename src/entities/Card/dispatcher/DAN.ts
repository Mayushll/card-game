import { Tracks } from "entities/AudioPlayer/AudioPlayer"
import { Character, countDefaultVoicesDecorator } from "entities/Card/helpers/helpers"
import { TCard } from "entities/Card/types/types"

function attackSounds({ src, int }: any) {
    Tracks.Sounds.changeAudio(`${src}/attack${int}`)
}

export function DAN(): TCard {
    const name = "DAN"
    const src = Character.getSrc(name)

    function attack() {
        let doVoice = countDefaultVoicesDecorator({ min: 1, max: 2, func: attackSounds })
        return () => {
            doVoice({ src })
        }
    }

    function death() {
        Tracks.Death.changeAudio(`${src}/death1`)
    }

    function summon() {
        Tracks.Sounds.changeAudio(`assets/characters/${name}/summon`)
    }

    return { attack: attack(), death, summon }
}
