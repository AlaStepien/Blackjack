let firstNumber = Math.floor( Math.random() * 21 ) +1
let secondNumber = Math.floor( Math.random() * 21 ) +1
let card = Math.floor( Math.random() * 21 ) +1

function get2RandomNumbers() {
  
   result = firstNumber + " " + secondNumber
   let startGame = document.getElementById("cards") 
   startGame.innerHTML = "Cards: " + result
   result = firstNumber + secondNumber
   let sumOfNumbers = document.getElementById("sum")
   sumOfNumbers.innerHTML = "Sum: " + result 
  
}



