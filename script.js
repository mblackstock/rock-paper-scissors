let user_choice ="";
let computer_choice = "";

let buttons = document.querySelectorAll(".choice");

buttons.forEach(e => {
  e.addEventListener("click", handleChoiceClick);
});

function handleChoiceClick(e) {
  let button = e.target;
  let choice = button.dataset.choice;
  
  console.log(`click ${choice}`);
}