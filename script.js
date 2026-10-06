function getComputerChoice(){

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


function playGame(){

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                computerScore++;
                console.log("You lost the round");
            }
            else if (computerChoice === "Scissors") {
                humanScore++;
                console.log("You won the round");
            }
            else {
                console.log("No result");
            }
        }

        else if (humanChoice === "Paper") {
            if (computerChoice === "Scissors") {
                computerScore++;
                console.log("You lost the round");
            }
            else if (computerChoice === "Rock") {
                humanScore++;
                console.log("You won the round");
            }
            else {
                console.log("No result");
            }
        }

        else {
            if (computerChoice === "Rock") {
                computerScore++;
                console.log("You lost the round");
            }
            else if (computerChoice === "Paper") {
                humanScore++;
                console.log("You won the round");
            }
            else {
                console.log("No result");
            }
        }
        
    }


    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game");
    }
    else{
        console.log("Game tied");
    }

}


playGame();


// console.log(getHumanChoice());
// console.log(getComputerChoice());

