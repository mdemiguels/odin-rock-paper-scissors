let roundCounter = 0;
let computerScore = 0;
let humanScore = 0;
let humanSelection = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const resultContainer = document.querySelector(".score-panel");
const textResultContainer = document.querySelector(".text-result-container");
const humanImage = document.querySelector("#humanImage");
const computerImage = document.querySelector("#computerImage");
const roundContainer = document.querySelector(".round-result-container");
const winnerContainer = document.querySelector(".winner-container");

document.addEventListener("DOMContentLoaded", (evt) => {
    printGlobalResult();
});

rockBtn.addEventListener("click", (evt) => {
    humanImage.src = "./images/rock.png";
    humanSelection = "rock";

    playGame();
});
paperBtn.addEventListener("click", (evt) => {
    humanImage.src = "./images/paper.png";
    humanSelection = "paper";
    playGame();
});
scissorsBtn.addEventListener("click", (evt) => {
    humanImage.src = "./images/scissors.png";
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

    scoreParagraph.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    globalRound.textContent = `Round ${roundCounter}`;

    resultContainer.appendChild(globalRound);
    resultContainer.appendChild(scoreParagraph);
}

function printRoundResult(msg) {
    if (textResultContainer.lastChild) {
        textResultContainer.removeChild(textResultContainer.lastChild);
    }

    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = msg;

    textResultContainer.appendChild(resultParagraph);
}

function printWinner(winner) {
    const confetiImg = document.createElement('img');
    const winnerParagraph = document.createElement("p");
    const resetButton = document.createElement("button");

    if (winner === "computer") {
        confetiImg.src = './images/robot.webp';
        winnerParagraph.textContent =
            "Computer is the winner!! Luck for the next time!";
    } else {
        confetiImg.src = './images/confeti.webp';
        winnerParagraph.textContent =
            "You are the winner!! Congratulations";
    }
    confetiImg.width = 80;
    resetButton.textContent = "Reset Game";
    resetButton.onclick = resetGame;

    winnerContainer.appendChild(confetiImg);
    winnerContainer.appendChild(winnerParagraph);
    winnerContainer.appendChild(resetButton);

    disableGameButtons();
}

function resetGame() {
    roundCounter = 0;
    computerScore = 0;
    humanScore = 0;

    humanImage.src = './images/question.png';
    computerImage.src = './images/question.png';

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

    if (randomChoice === 0) {
        computerImage.src = "./images/rock.png";
        return "rock";
    }
    if (randomChoice === 1) {
        computerImage.src = "./images/paper.png";
        return "paper";
    }
    if (randomChoice === 2) {
        computerImage.src = "./images/scissors.png";
        return "scissors";
    }
}
