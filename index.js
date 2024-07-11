function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let humanChoice = prompt(
      "Please enter rock, paper, or scissors"
    ).toLowerCase();

    if (validChoices.includes(humanChoice)) {
      return humanChoice;
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      return getHumanChoice(); // Recursively call the function until a valid choice is entered
    }
  }

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win this round!");
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      console.log("You lose this round!");
    } else {
      console.log("This round is a tie!");
    }
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log("Human choice:", humanSelection);
    console.log("Computer choice:", computerSelection);

    playRound(humanSelection, computerSelection);

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
  }

  // Declare the winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game. Better luck next time!");
  } else {
    console.log("The game is a tie!");
  }
}

// Start the game
playGame();
