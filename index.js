function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  const humanChoice = prompt("please enter rock, paper, or scissors");

  if (validChoices.includes(humanChoice)) {
    return humanChoice;
  } else {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice();
  }
}

console.log(getHumanChoice());
