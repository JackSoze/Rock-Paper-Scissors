console.log('hello world');
var choices = [
    'rock',
    'paper',
    'scissors'
]

function  computerPlay() {
    let play = (choices[Math.floor(Math.random()*choices.length)]); 
    return play
}

let playerSelection = 'rock'
console.log(`the player played ${playerSelection}`)

function gameRound(playerSelection,computerSelection) {
    if ((playerSelection=='rock')&&(computerSelection=='rock')) {
        return ('tie')
    } else if ((playerSelection=='rock')&&(computerSelection=='paper')) {
        return ('computer wins')
    } else if ((playerSelection=='rock')&&(computerSelection=='scissors')) {
        return ('player wins')
    } else if ((playerSelection=='paper')&&(computerSelection=='rock')) {
        return ('player wins')
    } else if ((playerSelection=='paper')&&(computerSelection=='paper')) {
        return ('tie')
    } else if ((playerSelection=='paper')&&(computerSelection=='scissors')) {
        return ('computer wins')
    } else if ((playerSelection=='scissors')&&(computerSelection=='rock')) {
        return ('computer wins')
    } else if ((playerSelection=='scissors')&&(computerSelection=='paper')) {
        return ('player wins')
    } else if  ((playerSelection=='scissors')&&(computerSelection=='scissors')) {
        return ('tie')
    } 
}


function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (i=0; i<5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('whats your input', ).toLowerCase()
        let result = (gameRound(playerSelection,computerSelection));
        if (result=='player wins'){
            console.log('player')
            playerWins=playerWins+1;
        } else if (result=='computer wins') {
            console.log ('computer')
            computerWins=computerWins+1;
        } else {
            console.log('tie')
        }
        

    }
    console.log (playerWins)
    console.log (computerWins)
}

console.log(game())

function winner(playerWins,computerWins){
    if (playerWins>computerWins) {
        console.log('the player wins')
    } else {
        console.log('the computer wins')
    }
}





