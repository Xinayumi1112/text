function spawnMeteor(){
  const meteor = document.createElement('span');
  meteor.className = 'meteor';
  meteor.style.left = `${60 + Math.random() * (window.innerWidth - 120)}px`;
  meteor.style.top = `${20 + Math.random() * 220}px`;
  document.body.appendChild(meteor);
  setTimeout(() => meteor.remove(), 2000);
}
setInterval(spawnMeteor, 15000);

let petalTick = 0;
document.addEventListener('mousemove', event => {
  const now = Date.now();
  if(now - petalTick < 140) return;
  petalTick = now;
  const petal = document.createElement('span');
  petal.className = 'cursor-petal';
  petal.textContent = Math.random() > .55 ? '♡' : '✦';
  petal.style.left = `${event.clientX}px`;
  petal.style.top = `${event.clientY}px`;
  petal.style.setProperty('--dx', `${Math.random() * 42 - 21}px`);
  petal.style.setProperty('--dy', `${-26 - Math.random() * 34}px`);
  petal.style.setProperty('--rot', `${Math.random() * 90 - 45}deg`);
  petal.style.fontSize = `${10 + Math.random() * 9}px`;
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 1500);
});

function formatTime(sec){
  if(!sec || Number.isNaN(sec)) return '0:00';
  const min = Math.floor(sec / 60);
  const second = Math.floor(sec % 60).toString().padStart(2,'0');
  return `${min}:${second}`;
}
const progressBarEl = document.getElementById('progressBar');
const audioEl = document.getElementById('bgm');
if(progressBarEl && audioEl){
  const timeBox = document.createElement('div');
  timeBox.className = 'player-time';
  const current = document.createElement('span');
  const duration = document.createElement('span');
  current.textContent = '0:00';
  duration.textContent = '0:00';
  timeBox.appendChild(current);
  timeBox.appendChild(duration);
  progressBarEl.parentElement.appendChild(timeBox);
  audioEl.addEventListener('loadedmetadata', () => duration.textContent = formatTime(audioEl.duration));
  audioEl.addEventListener('timeupdate', () => current.textContent = formatTime(audioEl.currentTime));
}
