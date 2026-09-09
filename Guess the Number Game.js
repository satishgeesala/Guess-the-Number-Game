let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let historyElement = document.getElementById("history");

let randomNumber = Math.ceil(Math.random()*100);
let previousGuess = " "

function checkGuess() {
    let guessedNumber = parseInt(userInput.value) ;
    let historyResult="";
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        historyResult = "High!"
        gameResult.style.backgroundColor = "#1e217c" ;
    }
    else if (guessedNumber < randomNumber){
        gameResult.textContent = "Too Low! Try Again.";
        historyResult = "Low"
        gameResult.style.backgroundColor = "#1e217c" ;
    }
    else if (guessedNumber === randomNumber){
        gameResult.textContent = "Congratulations! You got it right";
        historyResult = "Correct"
        gameResult.style.backgroundColor = "green" ;
        
        userInput.disabled = false;
        document.querySelector(".check-guess").disabled = true;
    }
    else{
        gameResult.textContent = "Provide a valid user input. ";
        historyResult = "Invalid"
        gameResult.style.backgroundColor = "red" ;
    }
    
    if (previousGuess !== guessedNumber) {
        historyElement.innerHTML += guessedNumber + " → " + historyResult + "<br>";
        previousGuess = guessedNumber;
    }
}
