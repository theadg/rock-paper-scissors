
const buttons = document.querySelectorAll("button");
const compSel = document.querySelector('#computerSelection');
const roundResult = document.querySelector('#roundResult');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
const pChoice = document.querySelector('#playerChoice');
const cChoice = document.querySelector('#computerChoice');
const playAgain = document.querySelector('#modalBtn');
const matchResult = document.querySelector('#matchResult');
const modal =  document.querySelector('#modal');
const pAddScore = document.querySelector('#pAddScore');
const cAddScore = document.querySelector('#cAddScore')
const addOne = document.getElementsByClassName('addScore');
computerScore = 0;
playerScore = 0;


playAgain.addEventListener('click', () => {
    modal.style.display = "none";
    reset();
});

function reset (){
    computerScore = 0;
    playerScore = 0;
    pChoice.textContent = '?';
    cChoice.textContent = '?';
    pScore.textContent = 'Player: 0';
    cScore.textContent = 'Computer: 0';
    pChoice.classList.remove('lose');
    cChoice.classList.remove('lose');
}
//iterating through each button
buttons.forEach((button) => {
 
//adding event listener
    button.addEventListener('click', () => {
        

        //getting player selection from button id
       
        const playerSelection = button.id;

        //testing computer play
        computerSelection = computerPlay();
        // compSel.textContent = computerSelection;
     
        
        //displaying winner:
        const roundWinner =playRound(playerSelection, computerSelection);
        roundResult.textContent = roundWinner;



        //displaying round score:
        roundScore(roundWinner);


        //changing choices;
        pChoice.textContent = playerChoice(playerSelection);
        cChoice.textContent = playerChoice(computerSelection);
        if (pChoice.textContent === '?'){
            cChoice.textContent ='?';
        }

        if (playerScore === 5 || computerScore === 5){
            reset();
            modal.style.display = "block";

            if (playerScore === 5)
            matchResult.textContent = 'You won';
            else
            matchResult.textContent = 'You fucking suck';

            
        }
        
    
            
    
    });
});


     
        function playerChoice(choice){
            if (choice === 'rock')
            choice = '✊';
            else if (choice === 'paper')
            choice = '🖐';
            else if (choice === 'scissors')
            choice = '✌'; 
            else 
            choice = '?';

            return choice;
        }

       
   
        function roundScore(roundWinner){
            if (roundWinner.includes("win")){
                playerScore += 1;
                pScore.textContent = `Player: ${playerScore}`;
                pAddScore.classList.add('scale');
                pAddScore.style.display = 'block';
                pAddScore.style.transform = 'scale(1.2)';
                pChoice.classList.add('none');
                pScore.classList.add('none');

                pChoice.classList.remove('lose');
                cChoice.classList.add('lose');

        
                setTimeout(function (){
                    pAddScore.style.display = 'none';
                    pChoice.classList.remove('none');
                    pScore.classList.remove('none');
        
                   
        
                }, 500);
              
            }
            //computer score
            else if (roundWinner.includes("lose")){
                computerScore +=1;
                cScore.textContent = `Computer: ${computerScore}`;
                cAddScore.style.display = 'block';
                cChoice.classList.add('none');
                cScore.classList.add('none');

                cChoice.classList.remove('lose');
                pChoice.classList.add('lose');
               
            
                setTimeout(function (){
                    cAddScore.style.display = 'none';
                    cChoice.classList.remove('none');
                    cScore.classList.remove('none');
        
                   
        
                }, 500);
            }
            else if (roundWinner.includes("tie")){
                cChoice.classList.remove('lose');
                pChoice.classList.remove('lose');
            }
        }









        //getting computer choice 
        function computerPlay(){
            const choices = ["rock", "paper" , "scissors"];
            let computerSelection = choices[Math.floor(Math.random () * choices.length)];
            return computerSelection;
        }
    

    //knowing the round winner
        function playRound(playerSelection, computerSelection){
 
            let decision = ''
            //rock win and lose conditions
            if (playerSelection === "rock" && computerSelection !== "paper" && computerSelection !== "rock"){
               decision = `You win! 
               ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection === "rock" && computerSelection === "paper"){
               decision = `You lose! 
               ${computerSelection} beats ${playerSelection}`;
            }
            else if (playerSelection === "rock" && computerSelection === "rock"){
               decision = `It's a tie! 
               ${computerSelection} bumps with ${playerSelection}`;
            }
       
       
             //paper win and lose conditions
            else if (playerSelection === "paper" && computerSelection !== "scissors" && computerSelection !== "paper"){
               decision = `You win! 
               ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection === "paper" && computerSelection === "scissors"){
               decision = `You lose! 
               ${computerSelection} beats ${playerSelection}`;
            }
            else if (playerSelection === "paper" && computerSelection === "paper"){
               decision = `It's a tie! 
               ${computerSelection} crumples with ${playerSelection}`;
            }
    
           //scissors win and lose conditions
           else if (playerSelection === "scissors" && computerSelection !== "rock" && computerSelection !== "scissors"){
               decision = `You win! 
               ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection === "scissors" && computerSelection === "rock"){
               decision = `You lose! 
               ${computerSelection} beats ${playerSelection}`;
            }
            else if (playerSelection === "scissors" && computerSelection === "scissors"){
               decision = `It's a tie! 
               ${computerSelection} snips with ${playerSelection}`;
            }
    
            return decision;
        }
    

    
    

    