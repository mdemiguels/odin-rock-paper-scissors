
function getComputerChoice() {

    const randomChoice = parseInt(Math.random() * 3);

    if(randomChoice === 0) return 'rock';
    if(randomChoice === 1) return 'paper';
    if(randomChoice === 2) return 'scissors';

}

function getHumanChoice() {
    
    let humanChoice = prompt('input your option: 🪨 rock 📃 paper ✂️ scissors');

    while(humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt('input a valid option! 😠')
    }
    console.log(humanChoice);

}

getHumanChoice();