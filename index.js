let firstNumber = Math.floor( Math.random() * 21 ) +1
let secondNumber = Math.floor( Math.random() * 21 ) +1
let card = Math.floor( Math.random() * 21 ) +1
let result = firstNumber + secondNumber

function get2RandomNumbers() {
  
   result = firstNumber + " " + secondNumber
   let startGame = document.getElementById("cards") 
   startGame.innerHTML = "Cards: " + result
   result = firstNumber + secondNumber
   let sumOfNumbers = document.getElementById("sum")
   sumOfNumbers.innerHTML = "Sum: " + result 
   let i = result
   if (i < 21) {
       let paragraphMessage = document.getElementById("message")
       paragraphMessage.innerHTML = "Do you want to draw another card?"
   }
   else if (i === 21) {
       let paragraphMessage = document.getElementById("message")
       paragraphMessage.innerHTML = "Huuray!"
   }
   else if ( i > 21) {
       let paragraphMessage = document.getElementById("message")
       paragraphMessage.innerHTML = "You lost the game."
   }
}
  


function newCard() {
    result = firstNumber + " " + secondNumber + " " + card
    let startGame = document.getElementById("cards") 
    startGame.innerHTML = "Cards: " + result
    let sumOfNumbers = document.getElementById("sum")
    let sumResult = firstNumber + secondNumber + card
   sumOfNumbers.innerHTML = "Sum: " + sumResult
   let i = sumResult
   if (i < 21) {
       let paragraphMessage = document.getElementById("message")
       paragraphMessage.innerHTML = "Do you want to draw another card?"
   }
   else if (i === 21) {
       let paragraphMessage = document.getElementById("message")
       paragraphMessage.innerHTML = "Huuray!"
   }
   else if ( i > 21) {
       let paragraphMessage = document.getElementById("message")
       paragraphMessage.innerHTML = "You lost the game."
   }
}

