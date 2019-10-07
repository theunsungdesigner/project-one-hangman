//imported jquery use .append() create li elements
let hangManState = document.body.querySelector(".hangman-state");
let resetButton = document.body.querySelector(".reset-game");
let nextWordButton = document.body.getElementsByClassName("next-word");
let userChoice = document.body.querySelector(".letters");
let solvedWord;
let lives = document.body.querySelector(".lives-message");
let totalLives = 8;
let win;
let loss;
let goodGuess = 0;
let badGuess = 0;
let badGuessCounter = 0;

let canvas = document.body.querySelector('#main')

let secretWord = [
  "zelda",
  "link",
  "pikachu",
  "ryu",
  "crash",
  "mario",
  "luigi",
  "megaman",
  "sonic",
  "zero",
  "ganondorf",
  "dante",
  "vergil",
  "bison",

];
let wordInPlay = "";
const randomWord = () => {
  wordInPlay = secretWord[Math.floor(Math.random() * secretWord.length)];
};
randomWord();

let wordInPlayArr = wordInPlay.split("");
wordInPlayArr.forEach(letter => {
  $(".my-word").append(`<li>${letter}</li>`);
  $("li").addClass("list-hidden");
});
// console.log(wordInPlayArr);

//  let displayRandomWord = $(".my-word").append(`<li></li>`)
//  console.log(displayRandomWord)

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
//produces alphabet on screen
for (let i = 0; i < alphabet.length; i++) {
  $(".letters").append(`<li>${alphabet[i]}</li>`);
  $("li").addClass("list");
  // document.body.querySelector('.list').innerHTML = alphabet[i];
  // console.log( alphabet[i])
}

//includes() to evaluate boolean if the string contains a letter
console.log(wordInPlayArr);
const userChooseLetter = e => {
  let letterChosen = e.target.innerHTML;
  //   console.log(letterChosen);

  for (x = 0; x < wordInPlayArr.length; x++) {
    if (letterChosen === wordInPlayArr[x]) {
      $(".list")[x].classList.remove("list-hidden");

      goodGuess++;
      console.log(`Good Guesses ${goodGuess}`);
      if (goodGuess === wordInPlayArr.length) {
        alert("you win");
        resetGame();
      }
    } else {
      badGuess++;
      console.log(`Bad Guesses ${badGuess}`);
      if (badGuess === wordInPlayArr.length) {
        badGuessCounter++;
        console.log(`Bad Guess Counter${badGuessCounter}`);

        if (badGuessCounter > 8) {
          alert("you lost");
          resetGame();
        }
      }
    }
  }
  badGuess = 0;
  e.target.remove();
};

const resetGame = () => {
  this.location.reload();
};

comments = function() {
  lives.innerHTML = "You have " + (8 - badGuessCounter) + " lives";
};
resetButton.addEventListener("click", resetGame);

userChoice.addEventListener("click", (e) => {
    userChooseLetter(e)
    comments(e)
});
