let humanscore = 0;
let computerscore = 0;

function getComputerChoice(){ return Math.floor(Math.random() * 3); }

function getHumanChoice(){
    let choice = parseInt(prompt("Enter choice : "));
    return choice;
}

function playRound(){
    const cchoice = getComputerChoice();
    const hchoice = getHumanChoice();
    if(hchoice == 0 && cchoice == 2) return "Computer Wins";
    else if(hchoice == 0 && cchoice == 1) return "Human Wins";
    else if(hchoice == 0 && cchoice == 0) return "Draw";
    else if(hchoice == 1 && cchoice == 2) return "Human Wins";
    else if(hchoice == 1 && cchoice == 0) return "Computer Wins";
    else if(hchoice == 1 && cchoice == 1) return "Draw";
    else if(hchoice == 2 && cchoice == 0) return "Human Wins";
    else if(hchoice == 2 && cchoice == 1) return "Computer Wins";
    else if(hchoice == 2 && cchoice == 2) return "Draw";
}

function playGame(n){
    for(let i = 1; i <= n; i++){
        const str = playRound();
        switch(str){
            case "Computer Wins" :
                computerscore++;
                break;
            case "Human Wins" :
                humanscore++;
                break;
            case "Draw" :
                break;
            default :
                break;
        }
    }
}

const n = parseInt(prompt("Enter the number of games : "));
playGame(n);
console.log("Human Score : ", humanscore);
console.log("Computer Score : ", computerscore);
const message = (humanscore <= computerscore) ? "Try better next time" : "Hurray! You won";
console.log(message);