// Function to create the timer element
function createTimer() {
  const timerDiv = document.createElement("div");
  timerDiv.id = "timer-extension";
  timerDiv.style.position = "fixed";
  timerDiv.style.top = "10px";
  timerDiv.style.left = "607px";
  timerDiv.style.width = "225px";
  timerDiv.style.height = "auto"; // Adjusted height to allow for variable content
  timerDiv.style.backgroundColor = "rgb(0,0,0)";
  timerDiv.style.padding = "8px";
  timerDiv.style.border = "1px solid rgb(0, 0, 0)";
  timerDiv.style.zIndex = "9999";
  timerDiv.style.color = "rgb(255,255,255)"


  // Create a container for the timer content
  const timerContentContainer = document.createElement("div");

  // Add your timer content to the timerContentContainer
  const timerContent = `
        <span id="time" >00:00:00</span>
        <button id="start" style="background-color: white; padding:3px; color:black;">Start</button>
        <button id="pause" style="background-color: white; padding:3px; color:black;">Pause</button>
        <button id="reset" style="background-color: white; padding:3px; color:black;">Reset</button>
    `;

  timerContentContainer.innerHTML = timerContent;

  // Append the timer content container to the timer div
  timerDiv.appendChild(timerContentContainer);

  // Append the timer element to the document body
  document.body.appendChild(timerDiv);

  // Initialize the timer functionality
  let timer;
  let isRunning = false;
  let startTime;
  let elapsedTime = 0;

  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start");
  const pauseButton = document.getElementById("pause");
  const resetButton = document.getElementById("reset");

  function updateTime() {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime + elapsedTime;
    const seconds = Math.floor(deltaTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes % 60
    ).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    timeDisplay.textContent = formattedTime;
  }

  // Event listener for the Start button
  function startTimer() {
    if (!isRunning) {
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateTime, 1000);
      isRunning = true;
    }
  }

  // Event listener for the Pause button
  function pauseTimer() {
    if (isRunning) {
      clearInterval(timer);
      isRunning = false;
      elapsedTime = Date.now() - startTime;
    }
  }

  // Event listener for the Reset button
  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00";
  }

  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);
  resetButton.addEventListener("click", resetTimer);
  // Set background images for the buttons using relative paths
  

  // Initialize the timer
  updateTime();
}

// Message listener for starting the timer
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startTimer") {
    if (!document.getElementById("timer-extension")) {
      createTimer();
    }
  }
});

// Message listener for starting the timer
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startTimer") {
    if (!document.getElementById("timer-extension")) {
      createTimer();
    }
  }
});
