let user_choice = "";
let computer_choice = "";
let user_score = 0;

let user_choice_element = document.getElementById("user_choice");
let computer_choice_element = document.getElementById("computer_choice");
let winner_element = document.getElementById("winner");
let score_element = document.getElementById("score");

let buttons = document.querySelectorAll(".choice");

buttons.forEach(e => {
  e.addEventListener("click", handleChoiceClick);
});

function handleChoiceClick(e) {
  let button = e.target;
  let userChoice = button.dataset.choice;
  changeImage(user_choice_element, userChoice);
  
  let computerChoice = generateComputerChoice();
  changeImage(computer_choice_element, computerChoice);

  let winner = getWinner(userChoice, computerChoice);
  winner_element.innerText = winner;

  if (winner === "user") {
    user_score++;
  } else if (winner === "computer") {
    user_score--;
  } // else its a tie!

  score_element.innerText = user_score;
}

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choiceNum = Math.floor(Math.random() * 3);
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

function changeImage(element, choice) {
  const tag = document.createElement("img");
  tag.setAttribute("src", `images/${choice}.png`)
  tag.setAttribute("width", "50px")
  element.replaceChildren(tag);
}