console.log('hello world');
alert('check the results in the console for now')
var choices = [
    'rock',
    'paper',
    'scissors'
]

function computerPlay() {
    let play = (choices[Math.floor(Math.random() * choices.length)]);
    return play         //returns a choice: rock,paper or scissors
}


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


function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay(); //declared again so it can be called with each loop
        let playerSelection = prompt('whats your input',).toLowerCase()  //same here
        let result = (gameRound(playerSelection, computerSelection));
        if (result == 'player wins') {
            console.log('player')
            playerWins = playerWins + 1;
        } else if (result == 'computer wins') {
            console.log('computer')
            computerWins = computerWins + 1;
        } else {
            console.log('tie')
        }
    }
    console.log(`player wins: ${playerWins}`)
    console.log(`computer wins: ${computerWins}`)

    let winner = function () {
        return ((playerWins > computerWins) ? 'the player wins' : 'the computer wins')
    }

    return winner(playerWins, computerWins) 
}

console.log(playGame())









