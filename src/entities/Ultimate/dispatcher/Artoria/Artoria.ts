import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "_shared/AudioPlayer/AudioPlayer"
import { TUltimate, setUltimateScreen } from "entities/Ultimate/state/state"
import { AppDispatch } from "app/store"

export function Artoria_Ultimate({ player_id, visible, name }: TUltimate, dispatch: AppDispatch) {
    Tracks.Ultimate[player_id as number].changeAudio(`assets/characters/${name}/ultimate${getRandomInt(1, 3)}`)
    dispatch(setUltimateScreen({ name: name, player_id: player_id, visible: visible }))
}
