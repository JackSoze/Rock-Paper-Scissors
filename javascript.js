console.log('hello world');
var choices = [
    'rock',
    'paper',
    'scissors'
]

let computerPlay = choices[Math.floor(Math.random()*choices.length)];
console.log(`the computer played ${computerPlay}`);

let computerSelection = computerPlay

let playerSelection = prompt('input',).toLowerCase()
console.log(`the player played ${playerSelection}`)
    
function playRound (playerSelection,computerSelection) {
    if ((playerSelection=='rock')&&(computerSelection=='rock')) {
        console.log('the game was a tie')
    } else if ((playerSelection=='rock')&&(computerSelection=='paper')) {
        console.log('you lose, paper beats rock')
    } else if ((playerSelection=='rock')&&(computerSelection=='scissors')) {
        console.log('you win, rock beats scissors')
    } else if ((playerSelection=='paper')&&(computerSelection=='rock')) {
        console.log('you win, paper beats rock')
    } else if ((playerSelection=='paper')&&(computerSelection=='paper')) {
        console.log('the game was a tie')
    } else if ((playerSelection=='paper')&&(computerSelection=='scissors')) {
        console.log('you lose, scissors beats paper')
    } else if ((playerSelection=='scissors')&&(computerSelection=='rock')) {
        console.log('you lose, rock beats scissors')
    } else if ((playerSelection=='scissors')&&(computerSelection=='paper')) {
        console.log('you win, scissors beats paper')
    } else if ((playerSelection=='scissors')&&(computerSelection=='scissors')) {
        console.log('the game was a tie')
    } 
}

playRound(playerSelection,computerSelection)