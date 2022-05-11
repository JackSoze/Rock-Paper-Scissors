console.log('hello world');
alert('check the results in the console for now')
var choices = [
    'rock',
    'paper',
    'scissors'
]

function  computerPlay() {
    let play = (choices[Math.floor(Math.random()*choices.length)]); 
    return play //returns the string: rock,paper or scissors
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
        let computerSelection = computerPlay(); //need to be called again as loop part
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
    console.log (`player wins: ${playerWins}`)
    console.log (`computer wins: ${computerWins}`)
    return winner(playerWins,computerWins) //winner() defined below
}

console.log(game())

function winner(playerWins,computerWins){
    if (playerWins>computerWins) {
       return ('the player wins')
    } else {
        return ('the computer wins')
    }
}





