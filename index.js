
// getComputerChoice Function
const getComputerChoice = function() {
    let num = Math.random();
    let choice = "Rock";
    if (num > 0.333 && num < 0.666){
        choice = "Paper";
    } else if (num > 0.666) {
        choice = "Scissors";
    }
    return choice;
}

console.log(getComputerChoice());




// getHumanChoice Function (assumes user enters valid choice)
const getHumanChoice = function() {
    let response = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    let output = "Rock";
    if (response === "Paper") {
        output = "Paper";
    }else if (response === "Scissors"){
        output = "Scissors";
    }
    return output;
}

console.log(getHumanChoice());
