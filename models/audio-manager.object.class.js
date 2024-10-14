/**
 * manages the volume, cooldown and the source of all audios within the game
 */
class AudioManager {
    audios = {};
    cooldowns = {};
    isMuted = false;


    /**
     * plays the audio and categorize the source
     * 
     * @param {string} audioSrc the source of the audio
     * @param {number} cooldown the duration the audio cannot be played again
     * @returns nothing if the cooldown is not finished
     */
    playAudio(audioSrc, cooldown) {
        const now = Date.now();
        if (this.cooldowns[audioSrc] && now - this.cooldowns[audioSrc] < cooldown) {
            return;
        } if (!this.audios[audioSrc]) {
            let audio = new Audio(audioSrc);
            console.log(audio);
            
            checkMuted(audio);
            this.audios[audioSrc] = audio;
        }
        this.audios[audioSrc].play();
        this.cooldowns[audioSrc] = now;
    }

    /**
     * checks if the audio for the game is muted or not
     * 
     * @param {Object} audio the URL from the audio
     * @returns the volume of the audio
     */
    checkMuted(audio) {
        if (!this.isMuted) {
            return audio.volume = 0.5;
        } else {
            return audio.volume = 0;
        }
    }

    /**
     * pauses the current audio file
     * 
     * @param {string} audioSrc 
     */
    pauseAudio(audioSrc) {
        if (this.audios[audioSrc]) {
            this.audios[audioSrc].pause();
        }
    }

    /**
     * stops the current audio file and resets the playtime to 0
     * 
     * @param {string} audioSrc 
     */
    stopAudio(audioSrc) {
        if (this.audios[audioSrc]) {
            let audio = this.audios[audioSrc];
            audio.pause();
            audio.currentTime = 0;
            audio.cooldowns = 0;
        }
    }

    /**
     * stops all audio files that are playing withing the game and resets the pülaytime to 0
     * 
     */
    stopAllAudios() {
        for (let audioSrc in this.audios) {
            let audio = this.audios[audioSrc];
            audio.pause();
            audio.currentTime = 0;
        }
        this.audios = {};
        this.cooldowns = {};
    }

    /**
     * mutes all audio files that are playing within the game
     */
    muteAllAudios() {
        for (let audioSrc in this.audios) {
            let audio = this.audios[audioSrc];
            audio.volume = 0;
        }
    }

    /**
     * unmutes all audio files that are playing within the game
     */
    unmuteAllAudios() {
        for (let audioSrc in this.audios) {
            let audio = this.audios[audioSrc];
            audio.volume = 0.5;
        }
    }
}
