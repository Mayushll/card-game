class AudioPlayer{
    private audio:HTMLAudioElement = document.createElement('audio');
    changeAudio(name:string){
        this.stopAudio()
        this.changeSource(name)
        this.playAudio()
    }
    changeVolume(number: number){
        this.audio.volume = number
    }
    getAudioTag(){
        return this.audio
    }
    private stopAudio(){
        this.audio.currentTime = 0;
        this.audio.pause();
    }
    private playAudio(){
        this.audio.play()
    }
    private changeSource(src:string){
        this.audio.setAttribute('src', `${process.env.PUBLIC_URL}/${src}.mp3`);
    }
}
export const Sounds = new AudioPlayer()
export const BackgroundMusic = new AudioPlayer()