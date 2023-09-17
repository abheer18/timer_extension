// background.js

// Example: Handling messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startTimer') {
      // Start the timer logic here
    } else if (message.action === 'pauseTimer') {
      // Pause the timer logic here
    } else if (message.action === 'resetTimer') {
      // Reset the timer logic here
    }
  });
  
// You can add more logic as needed
  // background.js

let isPopupOpen = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'togglePopup') {
    isPopupOpen = !isPopupOpen;
    // chrome.action.setIcon({
    //   path: isPopupOpen ? 'images/icon16-open.png' : 'images/icon16.png'
    // });
  }
});

  