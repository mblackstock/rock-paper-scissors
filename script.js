let user_choice ="";
let computer_choice = "";

let user_choice_element = document.getElementById("user_choice");
let computer_choice_element = document.getElementById("computer_choice");

let buttons = document.querySelectorAll(".choice");

buttons.forEach(e => {
  e.addEventListener("click", handleChoiceClick);
});

function handleChoiceClick(e) {
  let button = e.target;
  let choice = button.dataset.choice;

  user_choice_element.innerText = choice;

  let computerChoice = generateComputerChoice();

  computer_choice_element.innerText = computerChoice;
}

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choiceNum = Math.floor(Math.random()*3);
  return choices[choiceNum];
}