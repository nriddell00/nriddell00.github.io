document.querySelector("#spinButton").addEventListener("click", spin);
document.querySelector("#resetButton").addEventListener("click", resetGame);

let balance = 1000;

let balanceEl = document.getElementById("balance");
let betEl = document.getElementById("betAmount");

let messageEl = document.getElementById("message");

let symbols = [ {name: "Cherry", emoji: "🍒"}, {name: "Lemon", emoji: "🍋"}, {name: "Orange", emoji: "🍊"}, {name: "Watermelon", emoji: "🍉"}, {name: "Star", emoji: "⭐"}, {name: "Diamond", emoji: "💎"}];


function updateBalance() {
    balanceEl.textContent = "$" + balance;

    if (balance <= 0) {
        alert("Game Over! You have no more balance.");
        resetGame();
    }
}

function rand(max){
    return Math.floor(Math.random() * max);
}

function getRandomSymbol() {
    return symbols[rand(symbols.length)];
}

function spin() {
    let bet = Number(betEl.value);

    if (isNaN(bet) || bet <= 0) {
        alert("Please enter a valid bet amount!");
        return;
    }

    if (bet > balance) {
        alert("You cannot bet more than your current balance!");
        return;
    }
    
    balance = balance - bet;

    let picks = [];
    for (let i = 0; i < 3; i++) {
        picks.push(getRandomSymbol());
    }

    document.querySelector("#icon1").textContent = picks[0].emoji;
    document.querySelector("#icon2").textContent = picks[1].emoji;
    document.querySelector("#icon3").textContent = picks[2].emoji;

    let winnings = 0;

    if(picks[0].name === picks[1].name && picks[1].name === picks[2].name) {
        winnings = bet * 5;
    } else if (picks[0].name === picks[1].name || picks[1].name === picks[2].name || picks[0].name === picks[2].name) {
        winnings = bet * 2;
    } else {
        winnings = 0;
    }

    if (winnings > 0) {
        balance += winnings;
        messageEl.textContent = `You won $${winnings}!`;
    } else {
        messageEl.textContent = "No match. You lost $" + bet + ". Try again!";
    }

    updateBalance();
}

function resetGame() {
    balance = 1000;
    betEl.value = "100";

    messageEl.textContent = "Ready to play.";

    let x = getRandomSymbol();
    let y = getRandomSymbol();
    let z = getRandomSymbol();

    document.querySelector("#icon1").textContent = x.emoji;
    document.querySelector("#icon2").textContent = y.emoji;
    document.querySelector("#icon3").textContent = z.emoji;

    updateBalance();   
}

resetGame();