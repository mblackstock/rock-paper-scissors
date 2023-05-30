let user_choice ="";
let computer_choice = "";

let user_choice_element = document.getElementById("user_choice");
let computer_choice_element = document.getElementById("computer_choice");
let winner_element = document.getElementById("winner");

let buttons = document.querySelectorAll(".choice");

buttons.forEach(e => {
  e.addEventListener("click", handleChoiceClick);
});

function handleChoiceClick(e) {
  let button = e.target;
  let userChoice = button.dataset.choice;

  user_choice_element.innerText = userChoice;

  let computerChoice = generateComputerChoice();

  computer_choice_element.innerText = computerChoice;

  let winner = getWinner(userChoice, computerChoice);
  winner_element.innerText = winner;
}

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choiceNum = Math.floor(Math.random()*3);
  return choices[choiceNum];
}

function getWinner(userChoice, computerChoice) {
  let winner = "";
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      winner = "computer";
    } else if (computerChoice === "rock") {
      winner = "tie";
    } else {  // scissors
      winner = "user"
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "paper") {
      winner = "tie";
    } else if (computerChoice === "rock") {
      winner = "user";
    } else {  // scissors
      winner = "computer"
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      winner = "user";
    } else if (computerChoice === "rock") {
      winner = "computer";
    } else {  // scissors
      winner = "tie"
    }
  }
  return winner;
}