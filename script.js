const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentSongDisplay = document.getElementById("current-song");

const songs = [
    { name: "第一首歌", file: "song.mp3" },
    { name: "第二首歌", file: "song.mp3" },
    { name: "第三首歌", file: "song.mp3" },
];

let currentIndex = 0;

function loadSong(index) {
    audio.src = songs[index].file;
    currentSongDisplay.textContent = `当前播放：${songs[index].name}`;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseButton.textContent = "▶️";
    }
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
    playPauseButton.textContent = "⏸️";
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
    playPauseButton.textContent = "⏸️";
}

playPauseButton.addEventListener("click", playPause);
prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

window.onload = () => {
    loadSong(currentIndex);
};