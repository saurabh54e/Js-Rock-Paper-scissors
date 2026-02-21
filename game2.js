
let userScore=0;
let compScore=0;
let msg=document.querySelector(".msg-container");
let user=document.querySelector("#user");
let ai=document.querySelector("#ai");

const choices=document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options=["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx=Math.floor(Math.random()*3);
    return options [randIdx];
};

const drawGame = () => {
    console.log("The game was draw!");
    msg.innerText=`THE GAME WAS DRAW.`;
    msg.style.backgroundColor="orange";
};

const playGame = (userChoice) => {
    console.log("User choice=",userChoice)
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("Computer's choice=",compChoice);
    
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin= compChoice === "paper" ? false: true;
        }
        if(userChoice==="paper"){
            //scissors, rock
            userWin= compChoice === "scissors" ? false : true;
        }
        if(userChoice==="scissors"){
            //rock, paper
            userWin= compChoice === "rock" ? false : true;
        }

        if(userWin){
            msg.innerText=`YOU WON. COMPUTER'S CHOICE WAS ${compChoice}`;
            userScore+=1;
            user.innerText=userScore;
            msg.style.backgroundColor="green";

        }   
        else{
            msg.innerText=`YOU LOST. COMPUTER'S CHOICE WAS ${compChoice}`;
            compScore+=1;
            ai.innerText=userScore;
            msg.style.backgroundColor="red";
        }
    
    
    
    }
 
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})