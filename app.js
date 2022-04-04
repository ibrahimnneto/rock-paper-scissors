let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('#results');
const roundResults = document.querySelector('#roundResults');
const runningScore = document.querySelector('#runningScore');

function computerPlay() {
  // randomly return a choice for the computer move
  const computerChoices = ['rock', 'paper', 'scissors'];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors')
    || (computerSelection === 'paper' && playerSelection === 'rock')
    || (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }

  return `its a tie! ${playerSelection} ties with ${computerSelection}`;
}
function selections(selection) {
  const computerChoice = computerPlay();
  roundResults.textContent = playRound(selection, computerChoice);
  runningScore.textContent = `Live Score: Player ${playerScore}x${computerScore} Computer`;
  if (playerScore === 5) {
    results.textContent = `You won! Final score: ${playerScore}x${computerScore}`;
  } else if (computerScore === 5) {
    results.textContent = `You lost! Final score: ${playerScore}x${computerScore}`;
  }
}

const allButtons = document.querySelectorAll('[data-selection]');
allButtons.forEach((selecButton) => selecButton.addEventListener('click', (e) => {
  const playerChoice = selecButton.dataset.selection;
  selections(playerChoice);
}));
