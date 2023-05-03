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
// дополнительные музыкальные дорожки. Возможно понадобятся, если дорожкам одной группы необходимо наслаиваться.

function addExtraTrack({ type, id }: any) {
    ExtraTracks[type].push({ id: id, track: new AudioPlayer() })
}

function removeExtraTrack({ type, id }: any) {
    ExtraTracks[type].filter((item: any) => {
        return item.id === id
    })
}

function findExtraTrack({ type, id }: any) {
    return ExtraTracks[type].find((item: any) => {
        return item.id === id
    })
}

export const ExtraTracks: any = {
    Sounds: [],
    Death: [],
    Attacks: [],
    Moves: [],
    BackgroundMusic: [],
    Ultimate: [],
}
