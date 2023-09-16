let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerRunning = false;
if (localStorage.getItem('timerRunning') === 'true') {
  hours = parseInt(localStorage.getItem('hours')) || 0;
  minutes = parseInt(localStorage.getItem('minutes')) || 0;
  seconds = parseInt(localStorage.getItem('seconds')) || 0;
  timerRunning = true;
  startTimer();
}
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
  localStorage.setItem('hours', hours);
  localStorage.setItem('minutes', minutes);
  localStorage.setItem('seconds', seconds);
}
function startTimer() {
  if (!timerRunning) {
  timer = setInterval(updateTime, 1000);
  localStorage.setItem('timerRunning', 'true');
  timerRunning = true; 
  }
}

function pauseTimer() {
  clearInterval(timer);
  localStorage.setItem('timerRunning', 'false');
  timerRunning = false;
}

document.getElementById('start').addEventListener('click', () => {
  startTimer();
});

document.getElementById('pause').addEventListener('click', () => {
  pauseTimer();
});

document.getElementById('reset').addEventListener('click', () => {
  pauseTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').textContent = '00:00:00';
  localStorage.removeItem('hours');
  localStorage.removeItem('minutes');
  localStorage.removeItem('seconds');
  localStorage.removeItem('timerRunning');
});


