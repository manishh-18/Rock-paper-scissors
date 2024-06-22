let choices = document.querySelectorAll(".choice");

let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

let winMsg = document.querySelector("#msg");

let reset = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        winner(userChoice);
    })
})

const genCompChoice = ()=>{
    const choice = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return choice[random];
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        winMsg.innerText = `You win your ${userChoice} beats ${compChoice} 🎉`;
        winMsg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        winMsg.innerText = `You lose ${compChoice} beats your ${userChoice} 😢`;
        winMsg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const winner = (userChoice)=>{
    let compChoice = genCompChoice();
    if(userChoice===compChoice){
        winMsg.innerText = "Draw😵‍💫 Play again";
        winMsg.style.backgroundColor = "#6B2B06"
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true; 
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

reset.addEventListener("click",()=>{
    userScorePara.innerText="0";
    compScorePara.innerText="0";
    winMsg.innerText="Pick your choice";
    winMsg.style.backgroundColor = "#6B2B06"
})