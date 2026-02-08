//event listener
document.querySelector("#guessButton").addEventListener("click", guess);

let randomNum = Math.floor(Math.random() * 99) + 1; //random number between 1 and 100
console.log(randomNum);
let guessCount = 1;

function guess() {
    let userGuess =document.querySelector("#userGuess").value; //only for input elements
    // alert(userGuess);
    // document.querySelector("#userGuesses").textContent += userGuess + " ";
        document.querySelector("#userGuesses").textContent += `${userGuess} `; //template literal

    if(userGuess > randomNum) {
        document.querySelector("#result").textContent = "Too high!"; 
        document.querySelector("#result").style.color = "red";
    } else if(userGuess < randomNum) {
        document.querySelector("#result").textContent = "Too low!";
        document.querySelector("#result").style.color = "red";
    } else if(userGuess == randomNum) {
        document.querySelector("#result").textContent = "Correct!";
        document.querySelector("#result").style.color = "green";
        if (guessCount < 7){
         alert("Congrats! You guessed the number in " + guessCount + " guesses!");
        }
    }
    guessCount++;


    
}
