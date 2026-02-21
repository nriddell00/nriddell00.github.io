

document.querySelector("button").addEventListener("click", gradeQuiz);

let attempts = Number(localStorage.getItem("attempts")) || 0;
document.querySelector("#attempts").textContent = attempts;

shuffleQ1Choices()
function shuffleQ1Choices(){
    let q1choices = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"];

    q1choices = _.shuffle(q1choices);

    console.log(q1choices);

    for (let i of q1choices) {
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;
    labelElement.prepend(radioElement);

    document.querySelector("#q1ChoicesDiv").append(labelElement);

    console.log(labelElement);
    }
}

function gradeQuiz() {
    let score = 0;

    let answerQ1 = "Bulbasaur";
    let answerQ2 = "Kanto";
    let answerQ3 = "Water";
    let answerQ4 = 151;
    let answerQ5 = "Earth";

    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#q2").value;
    let userAnswer3 = document.querySelector("#q3").value;
    let userAnswer4 = document.querySelector("#q4").value;
    let userAnswer5 = document.querySelector("input[name=q5]:checked").value;

    if (userAnswer1 == answerQ1) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q1Result .correct").style.display = "inline";
        document.querySelector("#q1Text").textContent = "Correct!";
        document.querySelector("#q1Text").style.color = "limegreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q1Result .incorrect").style.display = "inline";
        document.querySelector("#q1Text").textContent = "Incorrect!";
        document.querySelector("#q1Text").style.color = "red";
        score += 0;
    }

    if (userAnswer2 == answerQ2) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q2Result .correct").style.display = "inline";
        document.querySelector("#q2Text").textContent = "Correct!";
        document.querySelector("#q2Text").style.color = "limegreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q2Result .incorrect").style.display = "inline";
        document.querySelector("#q2Text").textContent = "Incorrect!";
        document.querySelector("#q2Text").style.color = "red";
        score += 0;
    }

    if (userAnswer3 == answerQ3) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q3Result .correct").style.display = "inline";
        document.querySelector("#q3Text").textContent = "Correct!";
        document.querySelector("#q3Text").style.color = "limegreen";
    } else {
        //display "Wrong"
        // alert("Wrong"); 
        document.querySelector("#q3Result .incorrect").style.display = "inline";
        document.querySelector("#q3Text").textContent = "Incorrect!";
        document.querySelector("#q3Text").style.color = "red";
        score += 0;
    }

    if (userAnswer4 == answerQ4) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q4Result .correct").style.display = "inline";
        document.querySelector("#q4Text").textContent = "Correct!";
        document.querySelector("#q4Text").style.color = "limegreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q4Result .incorrect").style.display = "inline";
        document.querySelector("#q4Text").textContent = "Incorrect!";
        document.querySelector("#q4Text").style.color = "red";
        score += 0;
    }   
   
    if (userAnswer5 == answerQ5) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q5Result .correct").style.display = "inline";
        document.querySelector("#q5Text").textContent = "Correct!";
        document.querySelector("#q5Text").style.color = "limegreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q5Result .incorrect").style.display = "inline";
        document.querySelector("#q5Text").textContent = "Incorrect!";
        document.querySelector("#q5Text").style.color = "red";
        score += 0;
    }

    document.querySelector("#score").textContent = score;
    let message = document.querySelector("#finalMessage");
    if (score >= 80) {
        message.textContent = "Great job, you passed!";
        message.style.color = "limegreen";
    }
    else {
        message.textContent = "Better luck next time!";
        message.style.color = "red";
    }

    attempts++;
    localStorage.setItem("attempts", attempts);
    document.querySelector("#attempts").textContent = attempts;
}