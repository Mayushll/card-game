import { getRandomInt } from "utils/getRandomInt"
import { Tracks } from "entities/AudioPlayer/AudioPlayer"
import { setUltimateScreen } from "entities/Ultimate/state/state"
import { AppDispatch } from "app/store"

export function Artoria_Ultimate({ player_id, visible, name }: any, dispatch: AppDispatch) {
    Tracks.Ultimate[player_id].changeAudio(`assets/characters/${name}/ultimate${getRandomInt(1, 3)}`) //fixme куда-то переложить
    dispatch(setUltimateScreen({ name: name, player_id: player_id, visible: visible }))
}
