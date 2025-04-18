
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

//playound function
const playound = function(humanChoice, computerChoice){

}
