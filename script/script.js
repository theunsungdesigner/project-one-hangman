window.onload = function () {
    //imported jquery use .append() create li elements
let hangManState = document.body.querySelector('.hangman-state');
let resetButton =  document.body.querySelector('.reset-game');
let nextWordButton = document.body.getElementsByClassName('next-word');
let userChoice = document.body.querySelector('.letters')

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
//produces alphabet on screen
    for(let i =0; i<alphabet.length; i++) {
        $('.letters').append(`<li>${alphabet[i]}</li>`)
    }
//includes() to evaluate boolean if the string contains a letter
    const userChooseLetter = (e) => {
      var letterChosen = (e.target)
      console.log(letterChosen)
    }

    const resetGame = ()  => {
        this.location.reload()
    }

    resetButton.addEventListener('click', resetGame)
    userChoice.addEventListener('click', userChooseLetter )



    }