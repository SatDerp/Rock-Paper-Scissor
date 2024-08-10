function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "Rock";
    } else if(choice === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissor?");
    if(choice.toLowerCase() === "rock") {
        return "Rock";
    } else if(choice.toLowerCase() === "paper") {
        return "Paper";
    } else if(choice.toLowerCase() === "scissor") {
        return "Scissor"
    } else {
        console.log("Choose a valid move");
        return getHumanChoice();
    }
}

//Rock = 0, Paper = 1, Scissor = 2, Invalid = -1
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock") {
        if(computerChoice === "Rock") {
            console.log("Draw! Rock versus Rock.");
        } else if(computerChoice === "Paper") {
            computerScore += 1;
            console.log("You lose! Paper beats Rock.");
        } else {
            humanScore += 1;
            console.log("You win! Rock beats Scissor.");
        }
    } else if(humanChoice === "Paper") {
        if(computerChoice === "Rock") {
            humanScore += 1;
            console.log("You win! Paper beats Rock.");
        } else if(computerChoice === "Paper") {
            console.log("Draw! Paper versus Paper.");
        } else {
            computerScore += 1;
            console.log("You lose! Scissor beats Paper.");
        }
    } else {
        if(computerChoice === "Rock") {
            computerScore += 1;
            console.log("You lose! Rock beats Scissor.");
        } else if(computerChoice === "Paper") {
            humanScore += 1;
            console.log("You win! Scissor beats Paper.");
        } else {
            console.log("Draw! Scissor versus Scissor.");
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("human score: %d", humanScore);
        console.log("computer score: %d", computerScore);
        console.log("");
    }
}

var humanScore = 0;
var computerScore = 0;

playGame();

console.log("Scores after five rounds");
console.log("Human Score: %d", humanScore);
console.log("Computer Score: %d", computerScore);
