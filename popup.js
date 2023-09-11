let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = timeString;
}

document.getElementById('start').addEventListener('click', () => {
  timer = setInterval(updateTime, 1000);
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').textContent = '00:00:00';
});


