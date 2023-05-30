let user_choice ="";
let computer_choice = "";

let buttons = document.querySelectorAll(".choice");

buttons.forEach(e => {
  e.addEventListener("click", handleChoiceClick);
});

function handleChoiceClick(e) {
  console.log("click");
}