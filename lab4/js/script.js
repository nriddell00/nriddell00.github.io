let zipElement = document.querySelector("#zipCode")

zipElement.addEventListener("change", displayCity);

document.querySelector("#passwordBox").addEventListener("click", suggestPassword);
document.querySelector("#username").addEventListener("input", availableUsername);
document.querySelector("#passwordBox").addEventListener("input", checkPassword);

displayStates();
async function displayStates() {
    let url = " https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        //    alert(data[0].state);
        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch


}

async function displayCity() {
    // alert("Displaying city...");

    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    document.querySelector("#city").textContent = data.city;
    document.querySelector("#latitude").textContent = data.latitude;
    document.querySelector("#longitude").textContent = data.longitude;
}


async function suggestPassword(){
    let url = "https://csumb.space/api/suggestedPassword.php?length=8"

    let response = await fetch(url);
    let data = await response.json();

    document.querySelector("#suggestedPassword").textContent = data.password;
}

async function availableUsername() {

    let username = document.querySelector("#username").value;
    let url = " https://csumb.space/api/usernamesAPI.php?username=" + username;

    let response = await fetch(url);
    let data = await response.json();

    let valid = document.querySelector("#availableUsername");



    if (data.available == false)
    {
        valid.style.color = "red";
        valid.textContent = "Username is taken!"
    } else {
        valid.style.color = "green";
        valid.textContent = "Username is free!"
    }
}

function checkPassword(){
    let password = document.querySelector("#passwordBox").value;

    if (password.length < 6)
    {
        document.querySelector("#checkPassword").style.color = "red";
        document.querySelector("#checkPassword").textContent = "Password must be 6 characters!";
    }
    else {
        document.querySelector("#checkPassword").textContent = "";
    }
}

async function displayCounty() {
    
}