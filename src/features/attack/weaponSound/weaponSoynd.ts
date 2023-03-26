import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "_shared/AudioPlayer"

export function weaponSound(hero_class: string | undefined) {
    if (hero_class !== "archer") {
        Tracks.Attacks.changeAudio(`assets/attack/${hero_class || "saber"}/${getRandomInt(1, 2)}`)
    }
}
