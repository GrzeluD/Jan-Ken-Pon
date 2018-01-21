// point variables for winner declaration
let playerPoints = 0;
let aiPoints = 0;

//DOM elements variables
const aiDiv = document.getElementById('aiImg');
const playerDiv = document.getElementById('playerImg');
const rockImg = "<img src='assets/rock.png' alt='rock'>";
const paperImg = "<img src='assets/paper.png' alt='paper'>"
const scissorsImg = "<img src='assets/scissors.png' alt='scissors'>";
const description = document.getElementById('roundDescription');

// computers move returning random value and load image on page 
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
            return "paper";
            break;
    
        default :
            aiDiv.innerHTML = scissorsImg;
            return "scissors";
            break;
    }

}
// game logic with player action after button click
// after click on rock button
function rockBtn() {
    playerDiv.innerHTML = rockImg;
    aiDiv.innerHTML = "";
    description.innerHTML = "";
    
    aiChoice();

    switch (aiChoice()) {
        case "rock":
            description.innerHTML = "Tie!"
            break;
        case "paper":
            aiPoints += 1;
            description.innerHTML = "Paper beats Rock!";
            break;
    
        default:
            playerPoints += 1;
            description.innerHTML = "Rock beats Scissors!";
            break;
    }
    
    upgradePoints();
    declareWinner();
}
// after click on paper button
function paperBtn () {
    playerDiv.innerHTML = paperImg;
    aiDiv.innerHTML = "";
    description.innerHTML = "";
    
    aiChoice();
    
    switch (aiChoice()) {
            
        case "rock":
            playerPoints += 1;
            description.innerHTML = "Paper beats Rock!";
            break;
    
        case "paper": 
            description.innerHTML = "Tie!"
            break;
    
        default:
            aiPoints += 1;
            description.innerHTML = "Scissors beats Paper!";
            break;
    }
    
    upgradePoints();
    declareWinner();
}
// after click on scissors button
function scissorsBtn () {
    playerDiv.innerHTML = scissorsImg;
    aiDiv.innerHTML = "";
    description.innerHTML = "";
    
    aiChoice();
    
    switch (aiChoice()) {
            
        case "rock": 
            aiPoints += 1;
            description.innerHTML = "Rock beats Scissors!";
            break;
    
        case "paper":
            playerPoints += 1;
            description.innerHTML = "Scissors beats Paper!";
            break;
    
        default:
            description.innerHTML = "Tie!";
            break;
    }
    
    upgradePoints();
    declareWinner();
}


// function that declare a winner after 
function declareWinner() {
    if (playerPoints === 5) {
        alert("Congratulations! You won with the Computer!");
        playerPoints = 0;
        aiPoints = 0;
    }
    
    if (aiPoints === 5) {
        alert("Computer won! Try again!");
        playerPoints = 0;
        aiPoints = 0;
    }
}

function upgradePoints() {
    document.getElementById('playerPoints').innerHTML = playerPoints;
    document.getElementById('aiPoints').innerHTML = aiPoints;
}