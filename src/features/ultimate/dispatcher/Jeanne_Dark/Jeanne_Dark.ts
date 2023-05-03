import { Tracks } from "_shared/AudioPlayer"
import { addBuffToBoard } from "entities/Square"
import { setUltimateScreen } from "features/ultimate//modules/state/state"
import { AppDispatch } from "app/store"

export function Jeanne_Dark_Ultimate({ player_id, visible, name }: any, dispatch: AppDispatch) {
    Tracks.Ultimate[player_id].changeAudio(`assets/characters/${name}/ultimate`) //fixme куда-то переложить
    dispatch(setUltimateScreen({ name: name, player_id: player_id, visible: visible }))
    dispatch(addBuffToBoard({ player_id, buff: name }))
}
