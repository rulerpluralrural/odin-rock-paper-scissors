// text results variables
const winner = document.getElementById('winner');
const actionText = document.getElementById('action-text');

// health bar variables
const compScore_div = document.querySelectorAll('.circle-comp');
const playerScore_div = document.querySelectorAll('.circle-player');

// button and img variables
const playerPick = document.getElementById('player-pick');
const computerPick = document.getElementById('computer-pick');
const pickRock = document.getElementById('btn-rock');
const pickPaper = document.getElementById('btn-paper');
const pickScissors = document.getElementById('btn-scissors');
const choices = {
    rock: 'Images/rock.png',
    paper: 'Images/paper.png',
    scissors: 'Images/scissors.png'
};

// restart btn variable
const restart = document.querySelector('.refresh-btn');

// restart game function
function refreshPage() {
    location.reload();
}

// remove click event function 
function stopGame() {
    pickRock.removeEventListener("click", pickChoice, true);
    pickPaper.removeEventListener("click", pickChoice, true);
    pickScissors.removeEventListener("click", pickChoice, true);
}


// player health bar dmg function
function playerWon() {
    const remainingScore = document.querySelectorAll('.circle-comp');
    remainingScore[remainingScore.length - 1].className = 'circle-dmg';
    actionText.textContent = 'You Won!';
    actionText.className = 'win';
    if(remainingScore.length == 1) {
        winner.className = 'wresult';
        winner.textContent = 'Winner : Player Won!';
        restart.classList.remove('hidden');
        // call remove click event if health is empty
        stopGame();
    }
}

function computerWon() {
    const remainingScore = document.querySelectorAll('.circle-player');
    remainingScore[remainingScore.length - 1].className = 'circle-dmg';
    actionText.textContent = 'You Lost!';
    actionText.className = 'lost';
    if(remainingScore.length == 1) {
        winner.className = 'lresult';
        winner.textContent = 'Winner : Computer Won!';
        restart.classList.remove('hidden');
        // call remove click event if health is empty
        stopGame();
    }
}

function draw() {
    actionText.textContent = 'It\s a tie!';
    actionText.className = 'draw';
}

// Computer random choice function 
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum];
}

// Choices comparison function //
function game(playerChoice) {
    // pass in computer choice
    const computerChoice = getComputerChoice();
    // set img src to whatever computer picks
    computerPick.setAttribute('src', choices[computerChoice]);
    //set img src tp whatever player picks
    playerPick.src = choices[playerChoice];

    actionText.textContent = 'Pick your choice!';
    actionText.className = 'default';

    switch (playerChoice + ',' + computerChoice) {
        case 'rock,paper':
        case 'paper,scissors':
        case 'scissors,rock':
            computerWon();
            break;
        case 'paper,rock':
        case 'scissors,paper':
        case 'rock,scissors':
            playerWon();
            break;
        case 'rock,rock':
        case 'paper,paper':
        case 'scissors,scissors':
            draw();
            break;
    }
}

//* ----possible outcomes ----- *//
//(rock - paper = lose),      rock - rock = tie
//(paper - scissors = lose),  paper - paper = tie
//(scissors - rock = lose),   scissor - scissor = tie
//(paper - rock = win), 
//(scissors - paper = win), 
//(rock - scissors = win).

// pull data attribute from the buttons function
function pickChoice() {
    const pick = this.getAttribute('data-type');
    game(pick)
}

// Button click event listener
    pickRock.addEventListener('click', pickChoice, true);
    pickPaper.addEventListener('click', pickChoice, true);
    pickScissors.addEventListener('click', pickChoice, true);
    restart.addEventListener('click', refreshPage);
