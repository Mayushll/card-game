import {BackgroundMusic} from "../../entities/AudioPlayer/AudioPlayer";

export function linkStart(){
    BackgroundMusic.changeAudio(`black_bullet/start`)
    BackgroundMusic.changeVolume(0.2)
}

