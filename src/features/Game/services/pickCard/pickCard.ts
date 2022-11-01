import {Sounds} from "features/Game/entities/AudioPlayer/AudioPlayer";
import {AppDispatch} from "features/Game/store/store";
import {setSquare} from "../../entities/Board/slice";

export const pickCard = (name:string, id: number) => (dispatch:AppDispatch) => {
    setSound(name)
    dispatch(setSquare({name: name, id: id}))
}

function setSound(name:string){
    let src = `assets/${name}/start`
    Sounds.changeAudio(src)
}
