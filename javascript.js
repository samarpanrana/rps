let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;
let restartToggle = false;

let domPlayerMove = document.querySelector('.player-move');
let domComputerMove = document.querySelector('.computer-move');
let domPlayerScore= document.querySelector('.player-score');
let domComputerScore= document.querySelector('.computer-score');
let domResult = document.querySelector('.result-text');

// Query select to play the game on click
let buttons = document.querySelectorAll('.buttons');
for (button of buttons) {
    button.addEventListener('click', (e) => {
        let target = e.target;

        // get player choice
        if (target.classList.contains('img')) {
            playerChoice = target.nextElementSibling.textContent.toLowerCase();
        }
        else if(target.classList.contains('text')) {
            playerChoice = target.textContent.toLowerCase();
        }

        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }) 
}

// get computer choice
function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// playround
function playRound (choice1, choice2) {
    if (restartToggle) {
        restart();
        restartToggle = false;
        return;
    }

    domPlayerMove.textContent = `Player played: ${capitalizeFirst(choice1)}`
    domComputerMove.textContent = `Computer played: ${capitalizeFirst(choice2)}`

    switch (choice1) {
        case 'rock':
            if (choice2 == 'rock') {
                domResult.textContent = `It's a tie ${choice1} vs ${choice2}`;
            }
            else if (choice2 == 'paper') {
                computerScore++;
                domResult.textContent = `Computer (${choice2}) wins vs Player (${choice1})`;
            }
            else {
                playerScore++;
                domResult.textContent = `Player (${choice1}) wins vs Computer (${choice2})`;
            }
            break;
        case 'paper':
            if (choice2 == 'rock') {
                playerScore++;
                domResult.textContent = `Player (${choice1}) wins vs Computer (${choice2})`;
            }
            else if (choice2 == 'paper') {
                domResult.textContent = `It's a tie ${choice1} vs ${choice2}`;
            }
            else {
                computerScore++;
                domResult.textContent = `Computer (${choice2}) wins vs Player (${choice1})`;
            }
            break;
        case 'scissors':
            if (choice2 == 'rock') {
                computerScore++;
                domResult.textContent = `Computer (${choice2}) wins vs Player (${choice1})`;
            }
            else if (choice2 == 'paper') {
                playerScore++;
                domResult.textContent = `Player (${choice1}) wins vs Computer (${choice2})`;
            }
            else {
                domResult.textContent = `It's a tie ${choice1} vs ${choice2}`;
            }
            break;
        default: domResult.textContent = 'An error occured. Please input correct data'
    }
    showScores();
    if (showWinner()) {
        restartToggle = true;
    };
}

//restart
function restart () {
    domPlayerMove.textContent =  `Player played: `;
    domComputerMove.textContent = `Computer played: `;
    domComputerScore.textContent = `Player score: 0`;
    domPlayerScore.textContent = `Computer score: 0`;
    domResult.textContent = ``;
    playerScore = 0;
    computerScore = 0;
}

// capitalize first
function capitalizeFirst (string) {
    let array = string.split("");
    array[0] = array[0].toUpperCase();
    let newString = array.join("");
    return newString;
}


function showScores () {
    domPlayerScore.textContent= `Player Score: ${playerScore}` 
    domComputerScore.textContent= `Computer Score: ${computerScore}`     
}

function showWinner () {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            showWinnerText('Player');
            return true;
        }
        else if (computerScore > playerScore) {
            showWinnerText('Computer');
            return true;
        }
        else {
            showWinnerText('Tie');
            return true;
        }
    }   
}

function showWinnerText (string) {
    if (string == 'Tie') {
        domPlayerMove.textContent =  `It's a tie!`;
        domComputerMove.textContent = `It's a tie!`;
        domComputerScore.textContent = `It's a tie!`;
        domPlayerScore.textContent = `It's a tie!;`
        domResult.textContent = `It's a tie!`;
    }
    else {
        domPlayerMove.textContent =  `${string} won!`;
        domComputerMove.textContent = `${string} won!`;
        domComputerScore.textContent = `${string} won!`;
        domPlayerScore.textContent = `${string} won!`;
        domResult.textContent = `${string} won!`;
    }
}
