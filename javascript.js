console.log('hello world');

var choices = [
    'rock',
    'paper',
    'scissors'
]

function computerPlay() {
    let play = (choices[Math.floor(Math.random() * choices.length)]);
    return play         //returns a choice: rock,paper or scissors
}

let computerSelection = computerPlay();
let playerwins = 0;
let computerwins = 0;
let gameWinner = ''


function gameRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 'rock')) {
        return ('tie')
    } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
        return ('computer wins')
    } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        return ('player wins')
    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        return ('player wins')
    } else if ((playerSelection == 'paper') && (computerSelection == 'paper')) {
        return ('tie')
    } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        return ('computer wins')
    } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        return ('computer wins')
    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        return ('player wins')
    } else if ((playerSelection == 'scissors') && (computerSelection == 'scissors')) {
        return ('tie')
    }
} 


const buttons = document.querySelectorAll('button');

buttons.forEach(button=> 
    button.addEventListener('click', function(e) {
    if ((playerwins==5)||(computerwins==5)) {
        winner.textContent = `the winner is : ${gameWinner}`
        return;  
    }
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    if (gameRound(playerSelection,computerSelection)=='player wins') {
        playerwins++
    } else if (gameRound(playerSelection,computerSelection)=='computer wins') {
        computerwins++
    } else { 
        alert('the game was a tie')
    }
    
    playerWins.textContent =`player wins: ${playerwins}`;
    computerWins.textContent = `computer wins: ${computerwins}`;

    if (playerwins>computerwins) {
        gameWinner = 'player'
    }   else {
        gameWinner = 'computer'
    }
    
}) )




const header = document.querySelector('#header')
const results = document.querySelector('#results');

const declaration = document.createElement('div');
declaration.classList.add('declaration')
declaration.textContent = 'the results are as follows:'
results.appendChild(declaration);

const playerWins = document.createElement('div');
playerWins.classList.add('playerWins');

results.appendChild(playerWins);

const computerWins = document.createElement('div');
computerWins.classList.add('computerWins');

results.appendChild(computerWins);

const winner = document.createElement('div');
winner.classList.add('winner');
winner.textContent = 'the winner is: '
header.appendChild(winner);












