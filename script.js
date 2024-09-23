let computerScore = 0;
let humanScore = 0;
let humanSelection = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const resultContainer = document.querySelector(".global-result-container");
const roundContainer = document.querySelector(".round-result-container");

document.addEventListener("DOMContentLoaded", (evt) => {
    printGlobalResult();
});

rockBtn.addEventListener("click", (evt) => {
    // console.log("you clicked rock!");
    humanSelection = "rock";
    playGame();
});
paperBtn.addEventListener("click", (evt) => {
    // console.log("you clicked paper!");
    humanSelection = "paper";
    playGame();
});
scissorsBtn.addEventListener("click", (evt) => {
    // console.log("you clicked scissors!");
    humanSelection = "scissors";
    playGame();
});

function playGame() {
    playRound();
}

function printGlobalResult() {
    if (resultContainer.lastChild) {
        resultContainer.removeChild(resultContainer.lastChild);
    }

    const scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = `human: ${humanScore} - computer: ${computerScore}`;

    resultContainer.appendChild(scoreParagraph);
}

function printRoundResult(msg) {

    if (roundContainer.lastChild) {
        roundContainer.removeChild(roundContainer.lastChild);
    }

    const roundParagraph = document.createElement("p");
    roundParagraph.textContent = msg;

    roundContainer.appendChild(roundParagraph);

}

function playRound() {
    let computerSelection = getComputerSelection();

    if (humanSelection === computerSelection) {
        // console.log(`It\'s tie! both chose ${humanSelection}`);
        printRoundResult(`It\'s tie! both chose ${humanSelection}`);
        return;
    }

    if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        // console.log("You win! rock beats scissors");
        printRoundResult("You win! rock beats scissors");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        // console.log("You win! paper beats rock");
        printRoundResult("You win! paper beats rock");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        // console.log("You win! scissors beats paper");
        printRoundResult("You win! scissors beats paper");
    } else {
        computerScore++;
        // console.log(`You loose! ${computerSelection} beats ${humanSelection}`);
        printRoundResult(
            `You loose! ${computerSelection} beats ${humanSelection}`
        );
    }

    printGlobalResult();
}

function getComputerSelection() {
    const randomChoice = parseInt(Math.random() * 3);

    if (randomChoice === 0) return "rock";
    if (randomChoice === 1) return "paper";
    if (randomChoice === 2) return "scissors";
}
