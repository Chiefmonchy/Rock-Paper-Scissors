const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scores = document.querySelector('.scores');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.comp-score');
let playerSelection;
let playScore = 0;
let computerScore = 0;
let winner = '';

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice].toLowerCase()
}


const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        checkScore();
        compScore.append(computerScore);
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playScore++;
        checkScore()
        playerScore.append(playScore);
        return 'You Win! Rock beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playScore++;
        checkScore()
        playerScore.append(playScore);
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        checkScore()
        compScore.append(computerScore);
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playScore++;
        checkScore()
        playerScore.append(playScore);
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        checkScore()
        compScore.append(computerScore);
        return 'You Lose! Scissors beats Paper';
    } else {
        alert('No winner')
        return "It's a draw";
    }

}

function checkScore() {
    if (playScore === 5) {
        winner += 'Player is the winner!';
        playScore = 0;
        playerScore.textContent = playerScore.append(winner);

    } else if (computerScore === 5) {
        winner += 'Computer wins!'
        computerScore = 0;
        compScore.textContent = compScore.append(winner);

    }
}
