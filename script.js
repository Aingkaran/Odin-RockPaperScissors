function computerPlay(){
    let randomnumb = Math.floor(Math.random() * 9);
   
    if (randomnumb<=2){
        return "rock"
    }
        else if (randomnumb<=5){
            return "paper"
        }
        else {
            return "scissors"
        }
    
}


function playRound(playerSelection, computerSelection){
    userChoice= playerSelection.toLowerCase()
    if (userChoice==="rock"){
        if (computerSelection==="rock"){
            return "It's a Tie"}
        else if (computerSelection==="paper"){
            return "You lose!"}
        
        else {
            return "You Win!"
        }
        
    }

        else if (userChoice==="paper"){
            if (computerSelection==="rock"){
                return "You Win!"}
            else if (computerSelection==="paper"){
                return "It's a Tie"}
            
            else {
                return "You lose!"
            }
            
        }

        else if (userChoice==="scissors"){
            if (computerSelection==="rock"){
                return "You lose!"}
            else if (computerSelection==="paper"){
                return "You Win!"}
            
            else {
                return "It's a Tie"
            }
            
        }


        else {
            return "Wrong Input Choose Either: Rock , Paper OR Scissors!!"
        }

}