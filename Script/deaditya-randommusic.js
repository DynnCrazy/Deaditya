const audio = document.getElementById('rndmMusic');
let intervalId;
const cooldownTimeRndmMusic = 60000;
let lastCalledRndmMusic = 0;
const musicRandomList = [
    'Audio/manonawire.mp3',
    'Audio/nightchanges.mp3',
    'Audio/nina.mp3',
    'Audio/hero.mp3',
    'Audio/jakartahariini.mp3',
    'Audio/thenightwemeet.mp3',
];
let isPlaying = false;
var whatMusicPlay = "";
var nowplay = "Now playing: "

function playRndmMusic() {
    const nowDate = Date.now();

    if (nowDate - lastCalledRndmMusic < cooldownTimeRndmMusic) {
        alert("Sedang cooldown, mohon tunggu!");
        return;
    }

    lastCalledRndmMusic = nowDate;
    const randomIndex = Math.floor(Math.random() * musicRandomList.length);
    const selectedMusic = musicRandomList[randomIndex];

    audio.src = selectedMusic;
    audio.play();
    document.getElementById("btnpm1").innerHTML = "Play Another"
    document.getElementById("btnpm2").disabled = false;
    document.getElementById("btnpm2").style.cursor = "pointer";
    isPlaying = true;

    if (selectedMusic === "Audio/manonawire.mp3") {
        whatMusicPlay = "The Script - Man On A Wire";
        document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
    } else if (selectedMusic === "Audio/nightchanges.mp3") {
        whatMusicPlay = "One Direction - Night Changes";
        document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
    } else if (selectedMusic === "Audio/nina.mp3") {
        whatMusicPlay = ".Feast - Nina";
        document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
    } else if (selectedMusic === "Audio/hero.mp3") {
        whatMusicPlay = "Cash Cash - Hero (ft. Christina Perri)";
        document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
    } else if (selectedMusic === "Audio/jakartahariini.mp3") {
        whatMusicPlay = "For Revenge - Jakarta Hari Ini (ft. Stereowall)";
        document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
    } else if (selectedMusic === "Audio/thenightwemeet.mp3") {
        whatMusicPlay = "Lord Huron -  The Night We Met";
        document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
    }
}

function pauseRndmMusic() {
    if (isPlaying) {
        audio.pause();
        document.getElementById("musicnowplay").innerHTML = "Now pause: " + whatMusicPlay;
    } else {
        if (audio.src) {
            audio.play();
            document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
        } else {
            playRndmMusic();
            document.getElementById("musicnowplay").innerHTML = nowplay + whatMusicPlay;
        }
    }
    isPlaying = !isPlaying;
}

audio.addEventListener('ended', () => {
    isPlaying = false;
});