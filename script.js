function computerPlay(){
  let items = Array("rock","paper","scissors");
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function playRound(playerSelection, computerSelection){
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
  let result = "You lose! " + computerSelection + " beats " + playerSelection;
  if(outcome == 1){
    result = "You win! " + playerSelection + " beats " + computerSelection;
  }
  else if(outcome == 2) {
    result = "It's a tie!";
  }
  return result;
}
