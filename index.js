
// getComputerChoice Function
const getComputerChoice = function() {
    let num = Math.random();
    let choice = "rock";
    if (num > 0.333 && num < 0.666){
        choice = "paper";
    } else if (num > 0.666) {
        choice = "scissors";
    }
    return choice;
}

console.log(getComputerChoice());




// getHumanChoice Function (assumes user enters valid choice)
const getHumanChoice = function() {
    let response = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
    let output = "rock";
    if (response === "paper") {
        output = "paper";
    }else if (response === "scissors"){
        output = "scissors";
    }
    return output;
}

console.log(getHumanChoice());



// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// playRound function
const playRound = function(humanChoice, computerChoice){
    switch (humanChoice + "-" + computerChoice){
        case "rock-scissors":
            humanScore++;
            console.log("You win! Rock beats Scissors");
            break;

        case "rock-paper":
            computerScore++;
            console.log("You lose! Paper beats Rock");
            break;

        case "paper-rock":
            humanScore++;
            console.log("You win! Paper beats Rock");
            break;

        case "paper-scissors":
            computerScore++;
            console.log("You lose! Scissors beats Paper");
            break;

        case "scissors-rock":
            computerScore++;
            console.log("You lose! Rock beats Scissors");
            break;

        case "scissors-paper":
            humanScore++;
            console.log("You win! Scissors beats Paper");
            break;
        
        default:
            console.log("You tie!");
            break;
    }
}

// Playing the Round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

