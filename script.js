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
  let result = "You lose! " + computerSelection + " beats " + playerSelection;
  if(outcome == 1){
    result = "You win! " + playerSelection + " beats " + computerSelection;
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

playerScoreDisplay.innerText = "👤: 0"
computerScoreDisplay.innerText = "🤖: 0"

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', function(e) {
  playRound("rock");
});

function playRound(playerSelection){
  let computerSelection = randomItem();

}
