const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const volumeControl = document.getElementById('volume');
const trackInfo = document.getElementById('track-info');
const musicPlayer = document.getElementById('music-player');
const header = document.getElementById('player-header');
const closeButton = document.getElementById('close-btn');

let isPlaying = false;

// 播放或暂停音乐
playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = '播放';
  } else {
    audio.play();
    playPauseButton.textContent = '暂停';
  }
  isPlaying = !isPlaying;
});

// 停止音乐
stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseButton.textContent = '播放';
  isPlaying = false;
});

// 调节音量
volumeControl.addEventListener('input', (event) => {
  audio.volume = event.target.value;
});

// 关闭悬浮窗
closeButton.addEventListener('click', () => {
  musicPlayer.style.display = 'none';
});

// 实现悬浮窗拖动
let offsetX, offsetY, isDragging = false;

header.addEventListener('mousedown', (event) => {
  isDragging = true;
  offsetX = event.clientX - musicPlayer.offsetLeft;
  offsetY = event.clientY - musicPlayer.offsetTop;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    musicPlayer.style.left = `${event.clientX - offsetX}px`;
    musicPlayer.style.top = `${event.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});