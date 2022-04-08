
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const winnerDisplay = document.getElementById('winner');
const playAgainBtn = document.getElementById('play-again');

playAgainBtn.hidden = true;

let playerSelection;
let computerSelection;
let result;
let userScore = 0;
let computerScore = 0;

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');


rock.addEventListener('click', function(e){
    userChoiceDisplay.textContent = e.target.id;
    playerSelection = e.target.id;
    computerPlay();
    playRound();
})

paper.addEventListener('click', function(e){
    userChoiceDisplay.textContent = e.target.id;
    playerSelection = e.target.id;
    computerPlay();
    playRound();
})

scissors.addEventListener('click', function(e){
    userChoiceDisplay.textContent = e.target.id;
    playerSelection = e.target.id;
    computerPlay();
    playRound();
})

playAgainBtn.addEventListener('click', function(e){
    computerChoiceDisplay.hidden = false;
    userChoiceDisplay.hidden = false;
    resultDisplay.hidden = false;
    winnerDisplay.hidden = true;
    playAgainBtn.hidden = true;
    userScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = "You: " + userScore + " | " + "Computer: " + computerScore;
})


function computerPlay(){
    let randomChoice = Math.floor(Math.random()*3);

    if(randomChoice === 0){
        computerSelection = "Rock";
    }

    if(randomChoice === 1){
        computerSelection = "Paper";
    }

    if(randomChoice === 2){
        computerSelection = "Scissors";
    }

    computerChoiceDisplay.textContent = computerSelection;

}
    
function playRound(){

    if(playerSelection === computerSelection){
        result = "Tie";
    }
    if(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")){
        userScore++;
        result = "You Win";
    }
    if(
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")){
        computerScore++;
        result = "The Computer Wins";
    
    }
    scoreDisplay.textContent = "You: " + userScore + " | " + "Computer: " + computerScore;
    resultDisplay.textContent = result;

    if(userScore === 5){
        winnerDisplay.textContent = "You Won 5 Games First!";
        playAgainBtn.hidden = false;
        winnerDisplay.hidden = false;
        computerChoiceDisplay.hidden = true;
        userChoiceDisplay.hidden = true;
        resultDisplay.hidden = true;
        userChoiceDisplay.textContent = "";
        computerChoiceDisplay.textContent = "";
        resultDisplay.textContent = "";
        
    }
    else if(computerScore ===5){
        winnerDisplay.textContent = "The Computer Won Five Games First!";
        playAgainBtn.hidden = false;
        winnerDisplay.hidden = false;
        computerChoiceDisplay.hidden = true;
        userChoiceDisplay.hidden = true;
        resultDisplay.hidden = true;
        userChoiceDisplay.textContent = "";
        computerChoiceDisplay.textContent = "";
        resultDisplay.textContent = "";

    }
}


    


