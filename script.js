let roundWinner = " ";
let yourScore = 0;
let computerScore = 0;

for(let i = 1; i <= 5; i++){
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

    function computerPlay(){
        let randomChoice = Math.floor(Math.random()*3);
    
        if(randomChoice === 0){
            return "rock";
        }
    
        if(randomChoice === 1){
            return "paper";
        }
    
        if(randomChoice === 2){
            return "scissors";
        }
    
    }
    
    function playRound(playerSelection, computerSelection){
    
        if(playerSelection === computerSelection){
            roundWinner = "tie";
            return roundWinner;
        }
        if(
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")){
    
            roundWinner = "you";
            yourScore++;
            return roundWinner;
        }
        if(
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")){
            
            roundWinner = "computer";
            computerScore++;
            return roundWinner;
        
        }
    
    }

    let computerSelection = computerPlay();

    console.log("The computer picked: " + computerSelection);
    console.log("You picked: " + playerSelection);
    console.log("The winner is: " + playRound(playerSelection, computerSelection));
    console.log("The Score is You:" + yourScore + " Computer:" + computerScore)

}

if(yourScore > computerScore){
    console.log("You won the game " + yourScore + " to " + computerScore);
}else if(computerScore > yourScore){
    console.log("You lost the game " + yourScore + " to " + computerScore);
}else{
    console.log("It's a tie");
}


