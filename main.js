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
    showSadBearGif();
  }

  function updateNoButtonText() {
    const index = noCount % phrases.length;
    const buttonText = phrases[index];
    noButton.textContent = buttonText;

    const yesButtonSize = noCount * 20 + 16;
    yesButton.style.fontSize = `${yesButtonSize}px`;
  }

  function handleYesClick() {
    if (!yesPressed) {
      yesPressed = true;
      showYesContent();
      audio.play();
    }
  }

  function showYesContent() {
    valentineContainer.innerHTML = `
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <h1 class="text-4xl font-bold my-4">Yayyy!! Yippee!!</h1>
    `;
  }

  function showSadBearGif() {
    const bearImage = document.querySelector(".valentine-container img");

    if (bearImage) {
      const buttonType = yesPressed ? "yes" : "no";

      if (buttonType === "no") {
        bearImage.src = "https://media1.tenor.com/m/5t-iIxnzE8MAAAAC/sad-bear-cry.gif";
      }
    }
  }

  function init() {
    yesButton.addEventListener("click", handleYesClick);
    noButton.addEventListener("click", handleNoClick);
  }

  init();
});
