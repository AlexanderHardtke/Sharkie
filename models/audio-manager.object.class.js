class AudioManager {
    audios = {};
    cooldowns = {};


    playAudio(audioSrc, cooldown) {
        const now = Date.now();
        if (this.cooldowns[audioSrc] && now - this.cooldowns[audioSrc] < cooldown) {
            return;
        } if (!this.audios[audioSrc]) {
            let audio = new Audio(audioSrc);
            this.audios[audioSrc] = audio;
        }
        this.audios[audioSrc].play();
        this.cooldowns[audioSrc] = now;
    }

pauseAudio(audioSrc) {
    if (this.audios[audioSrc]) {
        this.audios[audioSrc].pause();
    }
}

pauseAllAudios() {
    for (let audioSrc in this.audios) {
        this.audios[audioSrc].pause();
    }
}

stopAudio(audioSrc) {
    if (this.audios[audioSrc]) {
        let audio = this.audios[audioSrc];
        audio.pause();
        audio.currentTime = 0;
        audio.cooldowns = 0;
    }
}

stopAllAudios() {
    for (let audioSrc in this.audios) {
        let audio = this.audios[audioSrc];
        audio.pause();
        audio.currentTime = 0;
    }
    this.audios = {};
    this.cooldowns = {};
}

resumeAllAudios() {
    for (let audioSrc in this.audios) {
        this.audios[audioSrc].play();
    }
}
}
