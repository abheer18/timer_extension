document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the document body to prevent popup from closing
  document.body.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from reaching the document level
  });

  // Add event listeners to your popup elements
  // For example, if you have a close button with an id of 'close-button':
  const closeButton = document.getElementById('close-button');
  if (closeButton) {
      closeButton.addEventListener('click', function () {
          // Close the popup when the close button is clicked
          window.close(); // This will close the popup
      });
  }

  // Send a message to background.js to toggle the popup when the popup is clicked.
  chrome.runtime.sendMessage({ action: 'togglePopup' });

  // Event listener to start the timer
  document.getElementById('startTimer').addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'startTimer' });
      });
  });
});
