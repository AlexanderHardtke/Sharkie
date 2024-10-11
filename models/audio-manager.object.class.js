class AudioManager {
    audios = {};

    // Audio erstellen und abspielen, wenn es noch nicht existiert
    playAudio(audioSrc) {
        if (!this.audios[audioSrc]) {
            let audio = new Audio(audioSrc);
            audio.loop = true; // Beispiel: falls der Sound wiederholt werden soll








            this.audios[audioSrc] = audio;
        }
        this.audios[audioSrc].play();
    }

    // Audio pausieren, wenn es existiert
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

    // Alle Audios stoppen
    stopAllAudios() {
        for (let audioSrc in this.audios) {
            let audio = this.audios[audioSrc];
            audio.pause();
            audio.currentTime = 0;
        }
        this.audios = {};
    }

    resumeAllAudios() {
        for (let audioSrc in this.audios) {
            this.audios[audioSrc].play();
        }
    }
}
