// point variables for winner declaration
let playerPoints = 0;
let aiPoints = 0;

// images into variables
const rockImg = "<img src='assets/rock.png' alt='rock'>";
const paperImg = "<img src='assets/paper.png' alt='paper'>"
const scissorsImg = "<img src='assets/scissors.png' alt='scissors'>";

//DOM elements variables
const aiDiv = document.getElementById('aiImg');
const playerDiv = document.getElementById('playerImg');
const description = document.getElementById('roundDescription');
const buttons = document.querySelectorAll("button");

// computer's move, returning random value and load image on page 
function aiChoice() {
    let aiWeapons = ['r', 'p', 's'];
    let aiPlay = aiWeapons[Math.floor(Math.random() * aiWeapons.length)];
    
    switch (aiPlay) {
        case 'r' :
            aiDiv.innerHTML = rockImg;
            return 'rock';
            break;
    
        case 'p':
            aiDiv.innerHTML = paperImg;
            return 'paper';
            break;
    
        default :
            aiDiv.innerHTML = scissorsImg;
            return 'scissors';
            
    }

}
// game logic with player action after button click

function round() {
    
    if (this.name === 'rock') {
        playerDiv.innerHTML = rockImg;
        description.textContent = '';

        aiChoice()
        
        switch (aiChoice()) {
            case 'rock':
                description.textContent = 'Tie!';
                break;

            case 'paper':
                aiPoints += 1;
                description.textContent = 'Paper beats Rock!';
                break;
    
            default:
                playerPoints += 1;
                description.textContent = 'Rock beats Scissors!';
        }
    
        upgradePoints();
        declareWinner(); 
    } 
    
    else if (this.name === 'paper'){
        playerDiv.innerHTML = paperImg;
        description.textContent = '';
    
        aiChoice();
    
        switch (aiChoice()) {
            
            case 'rock':
                playerPoints += 1;
                description.textContent = 'Paper beats Rock!';
                break;
    
            case 'paper': 
                description.textContent = 'Tie!';
                break;
    
            default:
                aiPoints += 1;
                description.textContent = 'Scissors beats Paper!';
        }
    
        upgradePoints();
        declareWinner();
        
    } 
    else if (this.name === 'scissors') {
        playerDiv.innerHTML = scissorsImg;
        description.textContent = '';

        aiChoice();
    
        switch (aiChoice()) {
            
            case 'rock': 
                aiPoints += 1;
                description.textContent = 'Rock beats Scissors!';
                break;
    
            case 'paper':
                playerPoints += 1;
                description.textContent = 'Scissors beats Paper!';
                break;
    
            default:
                description.textContent = 'Tie!';

        }
    
        upgradePoints();
        declareWinner();
    }
}
 
// iterate through buttons and add  on click function
buttons.forEach(button => button.addEventListener('click', round));



// function that declare a winner after 
function declareWinner() {
    if (playerPoints === 5) {
        alert('Congratulations! You won with the Computer!');
        playerPoints = 0;
        aiPoints = 0;
    }
    
    if (aiPoints === 5) {
        alert('Computer won! Try again!');
        playerPoints = 0;
        aiPoints = 0;
    }
}


function upgradePoints() {
    document.getElementById('playerPoints').textContent = playerPoints;
    document.getElementById('aiPoints').textContent = aiPoints;
}