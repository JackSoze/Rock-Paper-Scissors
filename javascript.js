console.log('hello world');
var choices = [
    'rock',
    'paper',
    'scissors'
]

function  computerPlay() {
    return (choices[Math.floor(Math.random()*choices.length)])
}

console.log(computerPlay())

