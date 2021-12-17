let firstNumber = Math.floor(Math.random() * 21) + 1;
let secondNumber = Math.floor(Math.random() * 21) + 1;
let card = Math.floor(Math.random() * 21) + 1;
let result = firstNumber + secondNumber;
let startGame = document.getElementById('cards');
let paragraphMessage = document.getElementById('message');
let sumOfNumbers = document.getElementById('sum');

function get2RandomNumbers() {
  result = firstNumber + ' ' + secondNumber;
  let startGame = document.getElementById('cards');
  startGame.innerHTML = 'Cards: ' + result;
  result = firstNumber + secondNumber;
  
  sumOfNumbers.innerHTML = 'Sum: ' + result;
  let i = result;
  if (i < 21) {
    paragraphMessage.innerHTML = 'Do you want to draw another card?';
  } else if (i === 21) {
    paragraphMessage.innerHTML = 'Huuray!';
  } else if (i > 21) {
    paragraphMessage.innerHTML = 'You lost the game.';
  }
}

function newCard() {
  result = firstNumber + ' ' + secondNumber + ' ' + card;

  startGame.innerHTML = 'Cards: ' + result;
  
  let sumResult = firstNumber + secondNumber + card;
  sumOfNumbers.innerHTML = 'Sum: ' + sumResult;
  let i = sumResult;
  if (i < 21) {
    let paragraphMessage = document.getElementById('message');
    paragraphMessage.innerHTML = 'Do you want to draw another card?';
  } else if (i === 21) {
    let paragraphMessage = document.getElementById('message');
    paragraphMessage.innerHTML = 'Huuray!';
  } else if (i > 21) {
    paragraphMessage.innerHTML = 'You lost the game.';
  }
}
let resetButton = document.getElementById('new-game');

function newGame() {
  startGame.innerHTML = 'Cards: ' + 0;
  sumOfNumbers.innerHTML = 'Sum: ' + 0
  paragraphMessage.innerHTML = '';
  firstNumber = Math.floor(Math.random() * 21) + 1;
secondNumber = Math.floor(Math.random() * 21) + 1;
}

resetButton.addEventListener('click', newGame);
