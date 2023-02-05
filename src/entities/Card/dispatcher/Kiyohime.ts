import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "entities/AudioPlayer/AudioPlayer"
import { Character, countDefaultVoicesDecorator } from "entities/Card/helpers/helpers"
import { TAttackProps, TCard, TCardInBattle } from "entities/Card/types/types"

interface Props {
    attacker: TCardInBattle
    src: string
    int?: number
}

function attackSounds({ attacker, src, int }: any) {
    if (attacker?.abilities.includes("first_slash")) {
        Tracks.Sounds.changeAudio(`${src}/first_attack`)
    } else {
        Tracks.Sounds.changeAudio(`${src}/default_attack${int}`)
    }
}

export function Kiyohime(): TCard {
    const name = "Kiyohime"
    const src = Character.getSrc(name)
    function attack() {
        let doVoice = countDefaultVoicesDecorator({ min: 1, max: 2, func: attackSounds })
        return ({ attacker }: TAttackProps) => {
            doVoice({ attacker: attacker, src: src })
        }
    }
    function death() {
        Tracks.Death.changeAudio(`${src}/death${getRandomInt(1, 2)}`)
    }
    function summon() {
        Tracks.Sounds.changeAudio(`assets/characters/${name}/summon`)
    }
    return { attack: attack(), death, summon }
}
