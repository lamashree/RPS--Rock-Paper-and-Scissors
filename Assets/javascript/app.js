var userScore = 0;
var computerScore = 0;
var user_Score = document.getElementById("user-score");
var computer_Score = document.getElementById("computer-score");
var scoreBody = document.querySelector("#score-body");
var results_p = document.querySelector(".results");
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissors = document.getElementById("s");

function getComputerChoice() {
    var choices = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};
function win(userChoice, computerOption) {
    computerScore++
    user_Score.innerHTML = userScore;
    computer_Score.innerHTML = computerScore
    results_p.innerHTML =     convert(userChoice)      +    "Beats"      +        convert(computerOption)   +      "you win!!!"
};
 function convert(Letter) {
     if (Letter== "r") return "rock";
     if (Letter== "p") return "Paper";
     return "scissors";
 }
function lose(userChoice, computerOption) {
    userScore++
    user_Score.innerHTML = userScore;
    computer_Score.innerHTML = computerScore
    results_p.innerHTML =     convert(userChoice)     +       "loses to"      +        convert(computerOption)        +      "you lost!!!"

};
function draw(userChoice, computerOption) {
    user_Score.innerHTML = userScore;
    computer_Score.innerHTML = computerScore
    results_p.innerHTML =    convert(userChoice)       +     convert(computerOption)       +       "it's a draw!!!"

};


function game(userChoice) {
    var computerOption = getComputerChoice();
    // console.log("computer choice:" + computerOption);
    // console.log("user choice:" + userChoice);
    switch (userChoice + computerOption) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerOption);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerOption);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerOption);
            break;
    };

};
function main() {
    rock.addEventListener("click", function () {
        game("r")
    });
    paper.addEventListener("click", function () {
        game("p")
    });
    scissors.addEventListener("click", function () {
        game("s")
    });
};
main();