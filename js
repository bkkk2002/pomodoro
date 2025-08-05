// script.js
let time = 25 * 60;
let timer;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      time--;
      updateDisplay();
      if (time === 0) {
        clearInterval(timer);
        document.getElementById("status").textContent = "Break time!";
        time = 5 * 60; // 5-minute break
        isRunning = false;
      }
    }, 1000);
    isRunning = true;
    document.getElementById("status").textContent = "Focus time!";
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 25 * 60;
  updateDisplay();
  isRunning = false;
  document.getElementById("status").textContent = "Focus time!";
}

updateDisplay();
