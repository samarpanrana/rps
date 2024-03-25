let computerScore = 0;
let playerScore = 0;

play();

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice () {
    let choice;
    let promptCount = 0;
    while (true){
        if (promptCount == 0) {
            choice = prompt("What to play?");
        }
        else {
            choice = prompt("Please input a valid choice.");
        }
     
        if (choice == undefined) {
            promptCount++;
        }
        else {
            choice = choice.toLowerCase();
            if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
                break;
            }
            promptCount++;
        }
    }
    return choice;
}

function playRound (choice1, choice2) {
    switch (choice1) {
        case 'rock':
            if (choice2 == 'rock') {
                return `It's a tie ${choice1} vs ${choice2}`;
            }
            else if (choice2 == 'paper') {
                computerScore++;
                return `Computer (${choice2}) wins vs Player (${choice1})`;
            }
            else {
                playerScore++;
                return `Player (${choice1}) wins vs Computer (${choice2})`;
            }
            break;
        case 'paper':
            if (choice2 == 'rock') {
                playerScore++;
                return `Player (${choice1}) wins vs Computer (${choice2})`;
            }
            else if (choice2 == 'paper') {
                return `It's a tie ${choice1} vs ${choice2}`;
            }
            else {
                computerScore++;
                return `Computer (${choice2}) wins vs Player (${choice1})`;
            }
            break;
        case 'scissors':
            if (choice2 == 'rock') {
                computerScore++;
                return `Computer (${choice2}) wins vs Player (${choice1})`;
            }
            else if (choice2 == 'paper') {
                playerScore++;
                return `Player (${choice1}) wins vs Computer (${choice2})`;
            }
            else {
                return `It's a tie ${choice1} vs ${choice2}`;
            }
            break;
        default: return 'An error occured. Please input correct data'
    }
}

function showScore () {
    return (`Player Score: ${playerScore}      Computer Score: ${computerScore}`);
}

function showWinner () {
    if (playerScore > computerScore) {
        return (`Player wins`);
    }
    else if (computerScore > playerScore) {
        return('Computer wins');
    }
    else {
        return('It\'s a tie');
    }
   
}

function play () {
    for (let i = 0 ; i < 5 ; i ++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log(showScore());
        console.log(`\n`);
    }
    console.log(showWinner());
}