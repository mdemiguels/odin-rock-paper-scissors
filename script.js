let computerScore = 0;
let humanScore = 0;

function playGame() {
    let humanSelection;
    let computerSelection;

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

// function printResult() {
//     console.log("Game finished!");
//     console.log(
//         `Total score: human: ${humanScore} - computer: ${computerScore}`
//     );

//     if (humanScore > computerScore)
//         console.log("You are the winner!! Congrats!! 🎊");
//     else if (humanScore < computerScore)
//         console.log("You have lost VS a computer... Shame on you 🤖");
//     else console.log("It's Tie! Could be worse... 😜");
// }

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

function getComputerChoice() {
    const randomChoice = parseInt(Math.random() * 3);

    if (randomChoice === 0) return "rock";
    if (randomChoice === 1) return "paper";
    if (randomChoice === 2) return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt(
        "input your option: 🪨 rock 📃 paper ✂️ scissors"
    ).toLowerCase();

    while (
        humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors"
    ) {
        humanChoice = prompt("input a valid option! 😠").toLowerCase();
    }

    return humanChoice;
}
