let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const ai = document.querySelector("#ai");
const choices = document.querySelectorAll(".choice");

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Capitalize helper
const cap = (word) => word.charAt(0).toUpperCase() + word.slice(1);

// Show message helper
const showMsg = (text, color) => {
    msg.innerText = text;
    msg.style.backgroundColor = color;
};

// Draw
const drawGame = () => {
    showMsg("THE GAME WAS DRAW.", "orange");
};

// Main game logic
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin;

    if (userChoice === "rock") {
        userWin = compChoice !== "paper";
    } 
    else if (userChoice === "paper") {
        userWin = compChoice !== "scissors";
    } 
    else {
        userWin = compChoice !== "rock";
    }

    if (userWin) {
        userScore++;
        user.innerText = userScore;
        showMsg(`YOU WON. COMPUTER CHOSE ${cap(compChoice)}`, "green");
    } 
    else {
        compScore++;
        ai.innerText = compScore;
        showMsg(`YOU LOST. COMPUTER CHOSE ${cap(compChoice)}`, "red");
    }
};

// Click listeners
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});