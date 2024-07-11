humanScore = 0;
computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win!");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human choice:", humanSelection);
console.log("Computer choice:", computerSelection);

playRound(humanSelection, computerSelection);

console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);
