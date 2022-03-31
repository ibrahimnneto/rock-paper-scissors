let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  // randomly return a choice for the computer move
  const computerChoices = ['rock', 'paper', 'scissors'];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  // plays a single round of rock paper scissors
  // returns a string that declares the winner of the round
  // like :"You Lose! Paper beats Rock"
  // make playerSelection tolower

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

  return 'its a tie!';
}

function game() {
  for (let i = 0; i < 5; i += 1) {
    const computer = computerPlay();
    const playerSel = prompt('Rock paper or scissors?');
    const player = playerSel.toLowerCase();
    if (player === 'rock' || player === 'paper' || player === 'scissors') {
      console.log(playRound(player, computer));
    } else {
      console.log('ERROR! Try again!');
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won! Final score: ${playerScore}x${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lost! Final score: ${computerScore}x${playerScore}`);
  } else {
    console.log(`Its a tie! Final score: ${playerScore}x${computerScore}`);
  }
}

// console.log(playRound(playerSelection, computerSelection));
game();
