const screenSection = document.getElementById("screen-section");
const playgroundSection = document.querySelector("#playground-section");
const resultSection = document.querySelector("#result-section");
const alphaBtn = document.getElementById("alpha-btn");

alphaBtn.addEventListener("click", function () {
  playgroundSection.classList.remove("hidden");
  screenSection.classList.add("hidden");

  continueGame();
});

// keyboard Handler
document.addEventListener("keyup", (e) => {
  let gamerPressed = e.key;

  //get the expected key
  const currentAlphabet = document.querySelector("#current-letter");
  const currentLetter = currentAlphabet.innerText.toLowerCase();
  console.log(gamerPressed, currentLetter);

  //checking to match the show and pressed letters
  if (gamerPressed === currentLetter) {
    //get the score
    let scoreElement = document.querySelector("#game-score");
    const scoreNumberText = scoreElement.innerText;
    const scoreNumber = parseInt(scoreNumberText);
    let newScore = scoreNumber + 1;
    //update the score
    scoreElement.innerText = newScore;

    removeBg(currentLetter);
    // increasingScore();
    continueGame();
  } else {
    //get the life
    const gameLife = document.querySelector("#game-life");
    const gameLifeText = gameLife.innerText;
    const gameLifeNumber = parseInt(gameLifeText);
    let newLife = gameLifeNumber - 1;
    gameLife.innerText = newLife;
if(newLife===0){
  gameOver()
}

  }
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

function gameOver(){

playgroundSection.classList.add("hidden");
resultSection.classList.remove("hidden")

}
function setBg(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

const removeBg = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
};

// increasing score
/*
const increasingScore = () => {
  // let score = 0;
  const scoreElement = document.querySelector("#game-score").innerText;
  const scoreNumber = parseInt(scoreElement);
  console.log(scoreNumber);
  const newScore = scoreNumber + 1;
  //update
  return (scoreElement.innerText = newScore);

  return newScore;
};
*/
