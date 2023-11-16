const buttonsElement = document.querySelectorAll('button');
const resultElement = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");




buttonsElement.forEach(each => {
    each.addEventListener('click', () => {
        const result = playRound(each.id, computerPlay());
        resultElement.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "it's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        playerScore++;
        userScoreElement.textContent = playerScore;
        return "you win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        return "you lose! " + computerSelection + " beats " + playerSelection;
    }


}