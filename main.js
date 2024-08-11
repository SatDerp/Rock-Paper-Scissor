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

function playRound(humanChoice, computerChoice) {        
    if(humanChoice === "Rock") {
        if(computerChoice === "Rock") {
            runningScore.textContent = "Draw! Rock versus Rock.";
        } else if(computerChoice === "Paper") {
            computerScore += 1;
            runningScore.textContent = "You lose! Paper beats Rock.";
        } else {
            humanScore += 1;
            runningScore.textContent = "You win! Rock beats Scissor.";
        }
    } else if(humanChoice === "Paper") {
        if(computerChoice === "Rock") {
            humanScore += 1;
            runningScore.textContent = "You win! Paper beats Rock.";
        } else if(computerChoice === "Paper") {
            runningScore.textContent = "Draw! Paper versus Paper.";
        } else {
            computerScore += 1;
            runningScore.textContent = "You lose! Scissor beats Paper.";
        }
    } else {
        if(computerChoice === "Rock") {
            computerScore += 1;
            runningScore.textContent = "You lose! Rock beats Scissor.";
        } else if(computerChoice === "Paper") {
            humanScore += 1;
            runningScore.textContent = "You win! Scissor beats Paper.";
        } else {
            runningScore.textContent = "Draw! Scissor versus Scissor.";
        }
    }
}

function checkScores() {
    if(computerScore === 5) {
        results.textContent = "Winner is Computer!";
        humanScore = 0;
        computerScore = 0;
        return false;
    } else if(humanScore === 5) {
        results.textContent = "Winner is Human!";
        humanScore = 0;
        computerScore = 0;
        return false;
    } 
    return true;
}

function displayRunningScore() {
    currScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
}

var humanScore = 0;
var computerScore = 0;

const div = document.querySelector("#container");
var runningScore = document.createElement("p");
var currScore = document.createElement("p");
var results = document.createElement("p");

const rBtn = document.querySelector("#rock");
const pBtn = document.querySelector("#paper");
const sBtn = document.querySelector("#scissor");

rBtn.addEventListener("click", () => {
    if(checkScores()) {
        results.textContent = "";
        playRound("Rock", getComputerChoice());
        displayRunningScore();
    }
});

pBtn.addEventListener("click", () => {
    if(checkScores()) {
        results.textContent = "";
        playRound("Paper", getComputerChoice());
        displayRunningScore();
    }  
});

sBtn.addEventListener("click", () => {
    if(checkScores()) {
        results.textContent = "";
        playRound("Scissor", getComputerChoice());
        displayRunningScore();
    }
});

div.appendChild(runningScore);
div.appendChild(currScore);
div.appendChild(results);
