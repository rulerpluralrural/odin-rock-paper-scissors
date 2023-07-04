// Make a function computerChoice that will return comp choices

// then a function that plays a single round of the game
// that second function should take 2 parameters playerSelect and computerSelect
// it should return a string that declares the winner of the round ex. 'You Lose!
// playerSelect function should be case insensitive

// write a new function game() and use the previous function inside this to play 5 game
// track the score and report the winner at the end of the game

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
}


//* ----possible outcomes ----- *//
//(rock - paper = lose),      rock - rock = tie
//(paper - scissors = lose),  paper - paper = tie
//(scissors - rock = lose),   scissor - scissor = tie
//(paper - rock = win), 
//(scissors - paper = win), 
//(rock - scissors = win).

function gameRound(playerSelect, computerSelect) {

    const playerChoice = playerSelect.toLowerCase();
    let gameResult;

    if (playerChoice == 'rock' && computerSelect == 'paper') {
        gameResult = 'You Lose!';
    } 
    else if (playerChoice == 'paper' && computerSelect == 'scissors') {
        gameResult = 'You Lose!';
    } 
    else if (playerChoice == 'scissors' && computerSelect == 'rock') {
        gameResult = 'You Lose!';
    } else if (playerChoice == 'paper' && computerSelect == 'rock') {
        gameResult = 'You Win!';
    } else if (playerChoice == 'scissors' && computerSelect == 'paper') {
        gameResult = 'You Win!';
    } else if (playerChoice == 'rock' && computerSelect == 'scissors') {
        gameResult = 'You Win!';
    } else if (playerChoice == computerSelect) {
        gameResult = 'It\'s a Tie!';
    } else {
        gameResult = 'Invalid Input';
    } 
    return gameResult;
    
}


function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) {


        const playerSelect = prompt('Rock, Paper, or Scissors?', '');
        const computerSelect = getComputerChoice();
        console.log({playerSelect, computerSelect});
        const result = gameRound(playerSelect,computerSelect);


        if (result == 'You Lose!') {
            computerScore += 1;
        } else if (result == 'You Win!') {
            playerScore += 1;
        }  console.log({computerScore, playerScore});
    }

    if (computerScore == playerScore) {
        console.log('It\'s a tie!');
    } else if (computerScore > playerScore) {
        console.log('Computer Won!')
    } else {
        console.log('You Won! Congratulations!');
    }
}

game();