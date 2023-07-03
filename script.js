// Make a function computerChoice that will return comp choices

// then a function that plays a single round of the game
// that second function should take 2 parameters playerSelect and computerSelect
// it should return a string that declares the winner of the round ex. 'You Lose!
// playerSelect function should be case insensitive

// write a new function game() and use the previous function inside this to play 5 game
// track the score and report the winner at the end of the game


function getComputerChoice () {
    return 'Paper';
}
console.log(getComputerChoice())

//* ----possible outcomes ----- *//
//(rock - paper = lose),      rock - rock = tie
//(paper - scissors = lose),  paper - paper = tie
//(scissors - rock = lose),   scissor - scissor = tie
//(paper - rock = win), 
//(scissors - paper = win), 
//(rock - scissors = win).

function gameRound(playerSelect, computerSelect) {

    if (playerSelect.toLowerCase() == 'rock' && computerSelect == 'Paper') {
        return 'You Lose!';
    } 
    else if (playerSelect.toLowerCase() == 'paper' && computerSelect == 'Scissors') {
        return 'You Lose!';
    } 
    else if (playerSelect.toLowerCase() == 'scissors' && computerSelect == 'Rock') {
        return 'You Lose!';
    } else if (playerSelect.toLowerCase() == 'paper' && computerSelect == 'Rock') {
        return 'You Win!';
    } else if (playerSelect.toLowerCase() == 'scissors' && computerSelect == 'Paper') {
        return 'You Win!';
    } else if (playerSelect.toLowerCase() == 'rock' && computerSelect == 'Scissors') {
        return 'You Win!';
    } else if (playerSelect.toLowerCase() == computerSelect.toLowerCase()) {
        return 'It\'s a Tie!';
    } else if (playerSelect.toLowerCase() == computerSelect.toLowerCase()) {
        return 'It\'s a Tie!';
    } else if (playerSelect.toLowerCase() == computerSelect.toLowerCase()) {
        return 'It\'s a Tie!';
    }
}

const playerSelect = prompt('Rock, Paper, or Scissors?', '');
const computerSelect = getComputerChoice();

console.log(gameRound(playerSelect, computerSelect));
