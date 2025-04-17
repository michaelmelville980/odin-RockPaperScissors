
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
