document.addEventListener("DOMContentLoaded", function () {
  const valentineContainer = document.querySelector(".valentine-container");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  let noCount = 0;
  let yesPressed = false;

  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  // Create an Audio element
  const audio = new Audio("happy.mp3");
  audio.loop = true; // Loop Da Muzzikiiik

  function handleNoClick() {
    noCount++;
    updateNoButtonText();
  }

  function updateNoButtonText() {
    const index = noCount % phrases.length;
    const buttonText = phrases[index];
    noButton.textContent = buttonText;

    // Dynamically adjust the font size based on noCount
    const yesButtonSize = noCount * 20 + 16;
    yesButton.style.fontSize = `${yesButtonSize}px`;
  }

  function handleYesClick() {
    if (!yesPressed) {
      yesPressed = true;
      showYesContent();
      // Play the audio file
      audio.play();
    }
  }

  function showYesContent() {
    valentineContainer.innerHTML = `
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <div class="text-4xl font-bold my-4">Ok yay!!!</div>
    `;
  }

  function init() {
    yesButton.addEventListener("click", handleYesClick);
    noButton.addEventListener("click", handleNoClick);
  }

  init();
});
