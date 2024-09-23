let computerScore = 0;
let humanScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const resultContainer = document.querySelector('.result-container');

document.addEventListener("DOMContentLoaded", (evt) => {
        printResult();
});
  
rockBtn.addEventListener("click", (evt) => {
    console.log("you clicked rock!");
    playGame("rock");
});
paperBtn.addEventListener("click", (evt) => {
    console.log("you clicked paper!");
    playGame("paper");
});
scissorsBtn.addEventListener("click", (evt) => {
    console.log("you clicked scissors!");
    playGame("scissors");
});

function playGame(humanSelection) {

    let computerSelection =  getComputerSelection();

    playRound(humanSelection, computerSelection);
    printResult();
}

function printResult() {

    if (resultContainer.lastChild) {
        resultContainer.removeChild(resultContainer.lastChild);
    }

    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `human: ${humanScore} - computer: ${computerScore}`;

    resultContainer.appendChild(scoreParagraph);

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore > computerScore)
            console.log("You are the winner!! Congrats!! 🎊");
        else if (humanScore < computerScore)
            console.log("You have lost VS a computer... Shame on you 🤖");
        else console.log("It's Tie! Could be worse... 😜");

    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It\'s tie! both chose ${humanChoice}`);
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! rock beats scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! paper beats rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! scissors beats paper");
    } else {
        computerScore++;
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
    }
}

function getComputerSelection() {
    const randomChoice = parseInt(Math.random() * 3);

    if (randomChoice === 0) return "rock";
    if (randomChoice === 1) return "paper";
    if (randomChoice === 2) return "scissors";
}
