class AudioPlayer {
    //fixme выглядит как кал
    private audio: HTMLAudioElement = new Audio()
    changeAudio(name: string) {
        this.stopAudio()
        this.changeSource(name)
        this.playAudio()
    }
    changeVolume(number: number) {
        this.audio.volume = number
    }
    getTag() {
        return this.audio
    }
    private stopAudio() {
        this.audio.currentTime = 0
        this.audio.pause()
    }
    private playAudio() {
        this.audio.play()
    }
    private changeSource(src: string) {
        this.audio.setAttribute("src", require(`../../${src}.mp3`))
    }
}

export const Tracks: any = {
    Sounds: new AudioPlayer(),
    Death: new AudioPlayer(),
    Attacks: new AudioPlayer(),
    Moves: new AudioPlayer(),
    BackgroundMusic: new AudioPlayer(),
    Ultimate: {
        "1": new AudioPlayer(),
        "2": new AudioPlayer(),
    },
}
