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


function playGame(){

 
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);

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

let humanScore = 0;
let computerScore = 0;
let hScore = document.querySelector(".hScore");
hScore.textContent = "Human " + humanScore
let cScore = document.querySelector(".cScore");
cScore.textContent = "Computer " + computerScore;


function playRound(humanChoice, computerChoice) {

    let score = document.querySelector(".score");
    let result = document.querySelector(".result");
    let choiceMsg = document.querySelector(".choiceMsg");
    let hChoiceMsg = document.querySelector(".hChoiceMsg");
    let cChoiceMsg = document.querySelector(".cChoiceMsg");


    if (humanChoice === "Rock") {
        hChoiceMsg.textContent = "You chose Rock";
        if (computerChoice === "Paper") {
            cChoiceMsg.textContent = "Computer chose Paper";
            computerScore++;
            cScore.textContent = "Computer " + computerScore;
            result.textContent = "Computer wins"
        }
        else if (computerChoice === "Scissors") {
            cChoiceMsg.textContent = "Computer chose Scissors";
            humanScore++;
            hScore.textContent = "Human " + humanScore;
            result.textContent = "You win"
        }
        else {
            cChoiceMsg.textContent = "Computer also chose Rock";
            result.textContent = "No point";
        }
    }

    else if (humanChoice === "Paper") {
        hChoiceMsg.textContent = "You chose Paper";
        if (computerChoice === "Scissors") {
            cChoiceMsg.textContent = "Computer chose Scissors";
            computerScore++;
            cScore.textContent = "Computer " + computerScore;
            result.textContent = "Computer wins"
        }
        else if (computerChoice === "Rock") {
            cChoiceMsg.textContent = "Computer chose Rock";
            humanScore++;
            hScore.textContent = "Human " + humanScore;
            result.textContent = "You win"
        }
        else {
            cChoiceMsg.textContent = "Computer also chose Paper";
            result.textContent = "No point"
        }
    }

    else {
        hChoiceMsg.textContent = "You chose Scissors";
        if (computerChoice === "Rock") {
            cChoiceMsg.textContent = "Computer chose Rock";
            computerScore++;
            cScore.textContent = "Computer " + computerScore;
            result.textContent = "Computer wins"
        }
        else if (computerChoice === "Paper") {
            cChoiceMsg.textContent = "Computer chose Paper";
            humanScore++;
            hScore.textContent = "Human " + humanScore;
            result.textContent = "You win"
        }
        else {
            cChoiceMsg.textContent = "Computer also chose Scissors";
            result.textContent = "No point"
        }
    }

    if(humanScore === 5 || computerScore === 5){
        if(humanScore === 5){
            result.textContent = "Game over, You won";
        }
        else{
            result.textContent = "Game over, Computer won";
        }
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        });

    }

}


let choice = document.querySelector(".choice");
choice.addEventListener('click', (event) => {
    let target = event.target;
    let cChoice;
    let hChoice;
    switch(target.id){
        case "rock" :
            hChoice = "Rock"
            cChoice = getComputerChoice();
            playRound(hChoice, cChoice);
            break;
        case "paper":
            hChoice = "Paper"
            cChoice = getComputerChoice();
            playRound(hChoice, cChoice);
            break;
        case "scissors":
            hChoice = "Scissors"
            cChoice = getComputerChoice();
            playRound(hChoice, cChoice);
            break;
    }
});


// console.log(getHumanChoice());
// console.log(getComputerChoice());

