let userScore = 0;
let compScore = 0;
//Access data
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScouePara = document.querySelector("#comp-score");
//generate computer choice
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //random choice of computer from options array
    const randIdx = Math.floor( Math.random() * 3); 
    return options[randIdx];
};
//draw function for draw condition
const drawGame = () => {
    msg.innerText = "Game is draw. Play again."; // add text for draw
    msg.style.backgroundColor = "#081b31"; 
};
//for win and lose condition
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){ //user win
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice};`;
        msg.style.backgroundColor = "green"; //change background color to green if user win
    }else{ //user lose
        compScore++;
        compScouePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; //change background color to red if user lose
    }
};
//game start 
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); //getting computer choice
    if(userChoice === compChoice){
        //draw condition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //scissor,rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); //access showWinner function
    }
};
//access all choices rock, paper & scissors
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //getting user choice
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});