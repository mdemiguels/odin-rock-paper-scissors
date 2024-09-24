let roundCounter = 0;
let computerScore = 0;
let humanScore = 0;
let humanSelection = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const resultContainer = document.querySelector(".global-result-container");
const roundContainer = document.querySelector(".round-result-container");
const winnerContainer = document.querySelector(".winner-container");

document.addEventListener("DOMContentLoaded", (evt) => {
    printGlobalResult();
});

rockBtn.addEventListener("click", (evt) => {
    humanSelection = "rock";
    playGame();
});
paperBtn.addEventListener("click", (evt) => {
    humanSelection = "paper";
    playGame();
});
scissorsBtn.addEventListener("click", (evt) => {
    humanSelection = "scissors";
    playGame();
});

function playGame() {
    playRound();
    printGlobalResult();

    if (humanScore === 5) printWinner("human");
    else if (computerScore === 5) printWinner("computer");
}

function printGlobalResult() {
    if (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    if (resultContainer.lastChild) {
        resultContainer.removeChild(resultContainer.lastChild);
    }

    const scoreParagraph = document.createElement("p");
    const globalRound = document.createElement("p");

    scoreParagraph.textContent = `human: ${humanScore} - computer: ${computerScore}`;
    globalRound.textContent = `Round ${roundCounter}`;

    resultContainer.appendChild(globalRound);
    resultContainer.appendChild(scoreParagraph);
}

function printRoundResult(msg) {
    if (roundContainer.lastChild) {
        roundContainer.removeChild(roundContainer.lastChild);
    }

    const roundResult = document.createElement("p");
    roundResult.textContent = msg;

    roundContainer.appendChild(roundResult);
}

function printWinner(winner) {
    const winnerParagraph = document.createElement("p");
    const resetButton = document.createElement("button");

    if (winner === "computer") {
        winnerParagraph.textContent =
            "Computer is the winner 🤖!! Luck for the next time! 🍀";
    } else {
        winnerParagraph.textContent =
            "You are the winner 🧍🏻‍♂️!! Congratulations 🎊";
    }
    resetButton.textContent = "Reset Game";
    resetButton.onclick = resetGame;

    winnerContainer.appendChild(winnerParagraph);
    winnerContainer.appendChild(resetButton);

    disableGameButtons();
}

function resetGame() {
    roundCounter = 0;
    computerScore = 0;
    humanScore = 0;

    printRoundResult();
    printGlobalResult();

    while (winnerContainer.firstChild) {
        winnerContainer.removeChild(winnerContainer.firstChild);
    }

    enableGameButtons();
}

function disableGameButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableGameButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function playRound() {
    let computerSelection = getComputerSelection();

    if (humanSelection === computerSelection) {
        printRoundResult(`It\'s tie! both chose ${humanSelection}`);
        roundCounter++;
        return;
    }

    if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        printRoundResult("You win! rock beats scissors");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        printRoundResult("You win! paper beats rock");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        printRoundResult("You win! scissors beats paper");
    } else {
        computerScore++;
        printRoundResult(
            `You loose! ${computerSelection} beats ${humanSelection}`
        );
    }

    roundCounter++;
}

function getComputerSelection() {
    const randomChoice = parseInt(Math.random() * 3);

    if (randomChoice === 0) return "rock";
    if (randomChoice === 1) return "paper";
    if (randomChoice === 2) return "scissors";
}
