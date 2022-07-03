let playerScore=0;
let computerScore=0;
const btn = document.querySelectorAll('button');





function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}


const container = document.querySelector('#container');
const resultsText = document.createElement('div');
const playerscoreText = document.createElement('div');
const computerscoreText = document.createElement('div');

const refreshText= document.createElement('div');
refreshText.setAttribute('id', 'refresh');                              


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


function playRound(playerSelection){
    userChoice= playerSelection.toLowerCase();
    computerSelection = computerPlay();

 
    let results = ""
    let player= ""
    let computer=""
    let refresh ="" 

    
    if ((userChoice == 'rock' && computerSelection == 'scissors') ||
        (userChoice == 'scissors' && computerSelection == 'paper') ||
        (userChoice == 'paper' && computerSelection == 'rock')){

            playerScore+=1;
        
            results= "You Win!!! "
            player= "Your Score Is: " + playerScore
            computer = " The Enemy Score is: " + computerScore

        if (playerScore==3){
            results = "GAME OVERRR YOU ARE THE WINNER";
            refresh= "Refresh Page To Restart"
            disableButtons()
            }
           ;

        }



    else if (userChoice===computerSelection){

        results = "It's a Tie , try again! " 
        player= "Your Score Is: " + playerScore
        computer = " The Enemy Score is: " + computerScore
        
    }

    else {
        computerScore+= 1;
        results = "You LOST!! " 
        player= "Your Score Is: " + playerScore
        computer = " The Enemy Score is: " + computerScore
        if (computerScore==3){
            results = "GAME OVERRR COMPUTER WINS";
            disableButtons()
            refresh= "Refresh Page To Restart"
            }

    }

    resultsText.textContent= results;
    playerscoreText.textContent= player;
    computerscoreText.textContent= computer;
    refreshText.textContent= refresh;


    container.appendChild(resultsText)
    container.appendChild(playerscoreText)
    container.appendChild(computerscoreText)
    container.appendChild(refreshText)


        
    
  

}


btn.forEach((button)=>{
    button.addEventListener('click', (e)=>{
    
        playRound(e.target.value)
        
    
        });
        

});





