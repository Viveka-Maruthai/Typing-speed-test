let startTime;
let endTime;
let isTestRunning = false;
let typedText = "";
const textToType = document.getElementById("textToType");
const userInput = document.getElementById("userInput");
const resultDiv = document.getElementById("result");

// Sample texts for the typing test
const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "The rain in Spain stays mainly in the plain.",
  "All that glitters is not gold.",
  "In the middle of difficulty lies opportunity.",
  "The early bird catches the worm.",
  "Actions speak louder than words.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "Success is not the key to happiness. Happiness is the key to success."
];

// Function to get a random sample text from the array
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * sampleTexts.length);
  return sampleTexts[randomIndex];
}

// Display the random sample text for the user to type
function displayText() {
  textToType.textContent = getRandomText();
}

// Function to start the test
function startTest() {
  if (isTestRunning) return; // If test is already running, don't start again

  typedText = "";
  userInput.value = "";
  resultDiv.textContent = "";
  textToType.style.color = "#555"; // Reset text color

  // Start timer
  startTime = new Date().getTime();
  isTestRunning = true;
  userInput.disabled = false;
  userInput.focus();

  // Set a new random text each time the test starts
  displayText();
}

// Function to track typing progress
function startTypingTest() {
  if (!isTestRunning) return; // Don't track typing if test hasn't started

  typedText = userInput.value;

  // If the typed text matches the predefined text
  if (typedText === textToType.textContent) {
    endTime = new Date().getTime();
    isTestRunning = false;
    userInput.disabled = true;

    // Calculate time taken and typing speed
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordsPerMinute = Math.round((textToType.textContent.split(" ").length / timeTaken) * 60);

    resultDiv.innerHTML = `
      <p>You completed the test!</p>
      <p>Time Taken: ${timeTaken} seconds</p>
      <p>Words per minute: ${wordsPerMinute}</p>
    `;

    textToType.style.color = "green"; // Change text color to green on success
  }
}

