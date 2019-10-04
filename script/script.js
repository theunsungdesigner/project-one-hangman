window.onload = function() {
  //imported jquery use .append() create li elements
  let hangManState = document.body.querySelector(".hangman-state");
  let resetButton = document.body.querySelector(".reset-game");
  let nextWordButton = document.body.getElementsByClassName("next-word");
  let userChoice = document.body.querySelector(".letters");

  let secretWord = [
    "zelda",
    "link",
    "pikachu",
    "ryu",
    "crash",
    "mario",
    "luigi",
    "mega man",
    "sonic",
    "zero"
  ];
  let wordInPlay = "";
  const randomWord = () => {
    wordInPlay = secretWord[Math.floor(Math.random() * secretWord.length)];
    console.log(wordInPlay);
  };
  randomWord();

  let wordInPlayArr = wordInPlay.split("");
  wordInPlayArr.forEach(letter => {
    $(".my-word").append(`<li>${letter}</li>`);
  });
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
  const userChooseLetter = e => {
    let letterChosen = e.target.innerHTML;
    console.log(letterChosen);
    // if (letterChosen === secretWord) {
    //     console.log('true')
    // }
  };

  const resetGame = () => {
    this.location.reload();
  };

  resetButton.addEventListener("click", resetGame);
  userChoice.addEventListener("click", userChooseLetter);
};
