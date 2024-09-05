let userScore =0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice= () => {
    const options = ["rock" ,"paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame =() => {
    console.log("game was draw");
    msg.innerText = "Game was draw! play again."
    msg.style.backgroundColor = "red";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won!");
        msg.innerText = "You Won!"
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "orange";

    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Genrate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice= ", compChoice);

    if (userChoice === compChoice ){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === 'rock'){
            userWin= compChoice ==='paper' ? false :true;
        }else if (userChoice === "paper") {
           userWin = compChoice === "scissors"? false : true;
        }else {
           userWin= compChoice=== "rock" ? false : true;
        }

        showWinner (userWin);
    
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

