//game logic
function randomItem(){
  let items = Array("rock","paper","scissors");
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function gameOutcome(playerSelection, computerSelection){
  let outcome = 0; //0 means lose, 1 means win, 2 means tie
  if(playerSelection == "rock" && computerSelection == "scissors"){
    outcome = 1;
  }
  else if(playerSelection == "paper" && computerSelection == "rock"){
    outcome = 1;
  }
  else if(playerSelection == "scissors" && computerSelection == "paper"){
    outcome = 1;
  }
  else if(playerSelection == computerSelection) {
    outcome = 2;
  }
  return outcome;
}

function gameResultMessage(playerSelection, computerSelection, outcome){
  let result = `You lose this round! ${computerSelection} beats ${playerSelection}`;
  if(outcome == 1){
    result = `You win this round! ${playerSelection} beats ${computerSelection}`;
  }
  else if(outcome == 2) {
    result = "It's a tie!";
  }
  return result;
}
//

const resultDisplay = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.score .player');
const computerScoreDisplay = document.querySelector('.score .computer');

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.innerText = "👤: 0"
computerScoreDisplay.innerText = "🤖: 0"

rockButton.addEventListener('click', function(e) {playRound("rock");});
paperButton.addEventListener('click', function(e) {playRound("paper");});
scissorsButton.addEventListener('click', function(e) {playRound("scissors");});

function playRound(playerSelection){
  let computerSelection = randomItem();
  let outcome = gameOutcome(playerSelection,computerSelection);
  let resultMessage = gameResultMessage(playerSelection,computerSelection,outcome);

  if(outcome == 0){
      computerScore++;
      resultDisplay.style.backgroundColor = "#d66d6d";
  } else if(outcome == 1) {
      playerScore++;
      resultDisplay.style.backgroundColor = "#6dd66d";
  } else {
    resultDisplay.style.backgroundColor = null;
  }
  resultDisplay.innerText = resultMessage;
  playerScoreDisplay.innerText = `👤: ${playerScore}`
  computerScoreDisplay.innerText = `🤖: ${computerScore}`
}
