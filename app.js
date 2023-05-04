const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection

}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";

    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;

    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(Rounds) {
    let compscore = 0;
    let playerscore = 0;

    for (let i = 0; i < Rounds; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerscore++;
        } else if (result.includes("Lose")) {
            compscore++;
        }

        if (playerscore > compscore) {
            console.log("You win the game! Final score: ", playerscore - compscore);
        } else if (playerscore < compscore) {
            console.log("You lose the game! Final score: ", compscore - playerscore);
        } else {
            console.log("It's a tie game! Final score: ", playerscore - compscore);
        }

    }
}

game(5);