const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Update the score display on the page
function updateScore() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

// Play a single round of the game
function playRound(playerSelection) {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection ==="rock" && computerSelection === "scissors") ||
    (playerSelection ==="paper" && computerSelection === "rock") ||
    (playerSelection ==="scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      updateScore();
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      updateScore();
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  // Restart the game by resetting the scores and clearing the round result message
  function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById("round-result").textContent = "Lets Play Again!";
  }
  
  // Add event listeners to the choice buttons and restart button
  document.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      const roundResult = playRound(button.id);
      document.getElementById("round-result").textContent = roundResult;
    });
  });
  
  document.getElementById("restart").addEventListener("click", () => {
    restartGame();
  });
  
