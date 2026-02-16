

document.querySelector("button").addEventListener("click", gradeQuiz);

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
        document.querySelector("#q1ChoicesDiv").style.backgroundColor = "lightgreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q1ChoicesDiv").style.backgroundColor = "salmon";
        score += 0;
    }

    if (userAnswer2 == answerQ2) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q2Div").style.backgroundColor = "lightgreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q2Div").style.backgroundColor = "salmon";
        score += 0;
    }

    if (userAnswer3 == answerQ3) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q3Div").style.backgroundColor = "lightgreen";
    } else {
        //display "Wrong"
        // alert("Wrong"); 
        document.querySelector("#q3Div").style.backgroundColor = "salmon";
        score += 0;
    }

    if (userAnswer4 == answerQ4) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q4Div").style.backgroundColor = "lightgreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q4Div").style.backgroundColor = "salmon";
        score += 0;
    }   
   
    if (userAnswer5 == answerQ5) {
        //display "Right"
        // alert("Right");
        score += 20;
        document.querySelector("#q5Div").style.backgroundColor = "lightgreen";
    } else {
        //display "Wrong"
        // alert("Wrong");
        document.querySelector("#q5Div").style.backgroundColor = "salmon";
        score += 0;
    }

    alert("Your score is: " + score);
}