import { Tracks } from "_shared/AudioPlayer"

export function startGame() {
    Tracks.BackgroundMusic.changeAudio(`assets/background-music/board/1`)

    Tracks.BackgroundMusic.getTag().addEventListener("ended", () => {
        Tracks.BackgroundMusic.changeAudio(`assets/background-music/board/1`)
    })
}
