import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "_shared/AudioPlayer/AudioPlayer"
import { Character } from "entities/Card/helpers/helpers"
import { TCard, TCardInBattle } from "entities/Card/types/types"
import { addBuffToPlayer, removeBuffFromPlayer } from "entities/Players"
import { AppDispatch } from "app/store"

export function Texas(): TCard {
    const name = "Texas"
    const src = Character.getSrc(name)
    function attack() {
        Tracks.Sounds.changeAudio(`${src}/attack${getRandomInt(1, 2)}`)
    }
    function death(card: TCardInBattle, dispatch: AppDispatch) {
        Tracks.Death.changeAudio(`${src}/death`)
        dispatch(removeBuffFromPlayer({ player_id: card.player_id, buff: name }))
    }
    function summon(card: TCardInBattle, dispatch: AppDispatch) {
        Tracks.Sounds.changeAudio(`assets/characters/${name}/summon`)
        dispatch(addBuffToPlayer({ player_id: card.player_id, buff: name }))
    }
    return { attack, death, summon }
}
