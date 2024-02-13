const screenSection = document.getElementById("screen-section");
const playgroundSection = document.querySelector("#playground-section");
const alphaBtn = document.getElementById("alpha-btn");

alphaBtn.addEventListener("click", function () {
  playgroundSection.classList.remove("hidden");
  screenSection.classList.add("hidden");

  continueGame();
});

function randomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabets.split("");

  let randomNumber = Math.random() * 25;
  let index = Math.round(randomNumber);
  const letter = letters[index];
  return letter;
}
function continueGame() {
  const alphabet = randomAlphabet();
  const currentLetter = document.querySelector("#current-letter");
  currentLetter.innerText = alphabet.toUpperCase();
  setBg(alphabet);
}

function setBg(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
