console.log('hello world');
var choices = [
    'rock',
    'paper',
    'scissors'
]

function  computerPlay() {
    return (choices[Math.floor(Math.random()*choices.length)])
}

let computerSelection = computerPlay()
console.log(`the computer played ${computerSelection}`)

let playerSelection = 'rock'
console.log(`the player played ${playerSelection}`)

function gameRound(playerSelection,computerSelection) {
    if ((playerSelection=='rock')&&(computerSelection=='rock')) {
        console.log('tie')
    } else if ((playerSelection=='rock')&&(computerSelection=='paper')) {
        console.log('computer wins')
    } else if ((playerSelection=='rock')&&(computerSelection=='scissors')) {
        console.log('player wins')
    } else if ((playerSelection=='paper')&&(computerSelection=='rock')) {
        console.log('player wins')
    } else if ((playerSelection=='paper')&&(computerSelection=='paper')) {
        console.log('tie')
    } else if ((playerSelection=='paper')&&(computerSelection=='scissors')) {
        console.log('computer wins')
    } else if ((playerSelection=='scissors')&&(computerSelection=='rock')) {
        console.log('computer wins')
    } else if ((playerSelection=='scissors')&&(computerSelection=='paper')) {
        console.log('player wins')
    } else if  ((playerSelection=='scissors')&&(computerSelection=='scissors')) {
        console.log('tie')
    } 
}

gameRound(playerSelection,computerSelection)





