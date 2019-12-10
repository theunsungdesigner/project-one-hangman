
let hangManState = document.body.querySelector(".hangman-state");
let resetButton = document.body.querySelector(".reset-game");
let nextWordButton = document.body.getElementsByClassName("next-word");
let userChoice = document.body.querySelector(".letters");
let solvedWord;
let lives = document.body.querySelector(".lives-message");
let totalLives = 5;
let win;
let loss;
let goodGuess = 0;
let badGuess = 0;
let badGuessCounter = 0;


let canvas = document.body.querySelector("#main");

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
  "bowser",
  "peach",
  "toad",
  "starfox",
  "vile",
  "sigma",
  "protoman"
];
let wordInPlay = "";
const randomWord = () => {
  wordInPlay = secretWord[Math.floor(Math.random() * secretWord.length)];
 
};
randomWord();

let wordInPlayArr = wordInPlay.split("");
wordInPlayArr.forEach(letter => {
  $(".my-word").append(`<li>${letter}</li>`);
});
$("li").addClass("list-hidden");

var alphabet = [
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
function renderHeart() {
    
  $(".lives-message").html("")
  for(let j = 0; j< totalLives; j++) {
    $(".lives-message").append('<img class="heart" src="/resources/images/hearttank.gif" />');

 } 
 

}
renderHeart();

//produces alphabet on screen
for (let i = 0; i < alphabet.length; i++) {
  $(".letters").append(`<li>${alphabet[i]}</li>`);
  $("li").addClass("list");
}
//sets up function for event listner when user picks a letter
console.log(wordInPlayArr);
const userChooseLetter = e => {
  let letterChosen = e.target.innerHTML;

  //lose megaman gif plays when condition met
  let lostState = () => {
    $("img").attr("src", "/resources/images/lose state.gif");
  };
  //win megaman gif plays when condition met
  let winState = () => {
    $("img").attr("src", "/resources/images/win.gif");
  };

  for (x = 0; x < wordInPlayArr.length; x++) {
    if (letterChosen === wordInPlayArr[x]) {
      $(".list")[x].classList.remove("list-hidden");

      goodGuess++;
      console.log(`Good Guesses ${goodGuess}`);
      if (goodGuess === wordInPlayArr.length) {
        alert("you win");
        winState();
        setTimeout(() => {
            resetGame();
        }, 6000);
        
      }
    } else {
      badGuess++;
      console.log(`Bad Guesses ${badGuess}`);
      if (badGuess === wordInPlayArr.length) {
        
        badGuessCounter++;
        totalLives -= 1;

        console.log(`Bad Guess Counter${badGuessCounter}`);
      

        if (badGuessCounter > 5) {
          alert("sorry you lose");
          lostState();
          setTimeout(() => {
            resetGame();    
          }, 4000);
          
        }
      }
    }
  }
  
  badGuess = 0;
  e.target.remove();
  renderHeart()
};

const resetGame = () => {
  this.location.reload();
};

 




resetButton.addEventListener("click", resetGame);

userChoice.addEventListener("click", e => {
  userChooseLetter(e);
  comments(e);
});
