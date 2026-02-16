//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);
//Global Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
    // alert("initialize game working");
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    document.querySelector("#resetBtn").style.display = "none";

    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    feedback.style.color = "black";
    document.querySelector("#guesses").textContent = "";
}

function checkGuess() {
    // alert("check guess working");
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    
    if (guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 99!";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";

    if (guess == randomNumber) {
        feedback.textContent = "Congratulations! You guessed the number!";
        feedback.style.color = "green";
        wins++;
        document.querySelector("#wins").textContent = wins;
        gameOver();
    }
    else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
           feedback.textContent = "Sorry, you lost! The number was " + randomNumber + ".";
           feedback.style.color = "red";
            losses++;
            document.querySelector("#losses").textContent = losses;
           gameOver(); 
        } else if (guess > randomNumber) {
            feedback.textContent = "Too high!";
        } else {
            feedback.textContent = "Too low!";
        }
    }
}

function gameOver() {
    guessBtn = document.querySelector("#guessBtn");
    resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}