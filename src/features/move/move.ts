import { cloneDeep } from "lodash"
import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "_shared/AudioPlayer"
import { TSquare, setSquare } from "entities/Square"
import { AppDispatch } from "app/store"

interface Props {
    attacker: TSquare
    target: TSquare
}

export const Move = ({ target, attacker }: Props, dispatch: AppDispatch) => {
    let card = cloneDeep(attacker.card)!
    Tracks.Moves.changeAudio(`assets/move/${getRandomInt(1, 4)}`)
    card.movePoints = card.movePoints - 1
    dispatch(setSquare({ x: target.x, y: target.y, card: card }))
    dispatch(setSquare({ x: attacker.x, y: attacker.y, card: null }))
}
