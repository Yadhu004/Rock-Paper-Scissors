function getCompputerChoice(){

    let choice = Math.floor(Math.random() * 3)  ;

    let s1 = "Rock";
    let s2 = "Paper";
    let s3 = "Scissors";

    switch (choice) {
        case 0:
            return s1;
        case 1:
            return s2;
        case 2:
            return s3;
    }

}

function getHumanChoice(){

    let choice = parseInt(prompt("Enter an option: 1.Rock  2.Paper  3.Scissors "));

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
    
}

// for(let i = 0; i < 5; i++){
//     playGame();
// }

// function playGame(){

function playRound(humanChoice, computerChoice) {

    let humanScore = 0;
    let computerScore = 0;

    if(humanChoice === "Rock"){
        if(computerChoice === "Paper"){
            computerScore++;
        }
        else if(computerChoice === "Scissors"){
            humanScore++;
        }
        else{
            console.log("No result");
        }
    }

    else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore++;
        }
        else if (computerChoice === "Rock") {
            humanScore++;
        }
        else {
            console.log("No result");
        }
    }

    else {
        if (computerChoice === "Rock") {
            computerScore++;
        }
        else if (computerChoice === "Paper") {
            humanScore++;
        }
        else {
            console.log("No result");
        }
    }

    if(humanScore > computerScore){
        console.log("You won the round");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the round");
    }
    else{
        console.log("Round tied");
    }
}
// }



let humanSelection = getHumanChoice();
let computerSelection = getCompputerChoice();
console.log(computerSelection);

playRound(humanSelection, computerSelection);


// console.log(getHumanChoice());
// console.log(getCompputerChoice());

