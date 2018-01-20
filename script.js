// point variables for winner declaration
let playerPoints = 0;
let aiPoints = 0;

// computers move returning random value and load image on page 
function aiChoice() {
    let aiWeapons = ['r', 'p', 's'];
    let aiPlay = aiWeapons[Math.floor(Math.random() * aiWeapons.length)];
    
    if (aiPlay === 'r') {
        document.getElementById('aiImg').innerHTML = "<img src='assets/rock.png' alt='rock'>";
        return 'rock';
    } 
    else if (aiPlay === 'p' ) {
        document.getElementById('aiImg').innerHTML = "<img src='assets/paper.png' alt='paper'>";
        return "paper";
    }
    else if (aiPlay === 's') {
        document.getElementById('aiImg').innerHTML = "<img src='assets/scissors.png' alt='scissors'>";
        return "scissors";
    }

}
// game logic with player action after button click
// after click on rock button
document.getElementById('rockBtn').onclick = function () {
    document.getElementById('playerImg').innerHTML = "<img src='assets/rock.png' alt='rock'>";
    
    aiChoice();
    
    if (aiChoice()=== "rock") {
        console.log("TIE");  
        document.getElementById('roundDescription').innerHTML = "Tie!"
    }
    else if (aiChoice() === "paper") {
        console.log("AI WON");
        aiPoints += 1;
        document.getElementById('roundDescription').innerHTML = "Paper beats Rock!";
    }
    else if (aiChoice() === "scissors") {
        console.log("YOU WON");
        playerPoints += 1;
        document.getElementById('roundDescription').innerHTML = "Rock beats Scissors!";
    }
    
    upgradePoints();
    declareWinner();
}
// after click on paper button
document.getElementById('paperBtn').onclick = function () {
    document.getElementById('playerImg').innerHTML = "<img src='assets/paper.png' alt='paper'>";
    
    aiChoice();
    
    if (aiChoice() === "rock") {
        console.log("YOU WON");
        playerPoints += 1;
        document.getElementById('roundDescription').innerHTML = "Paper beats Rock!";
    }
    else if(aiChoice() === "paper") {
        console.log("TIE");
        document.getElementById('roundDescription').innerHTML = "Tie!"
    }
    else {
        console.log("AI WON");
        aiPoints += 1;
        document.getElementById('roundDescription').innerHTML = "Scissors beats Paper!";
    }
    
    upgradePoints();
    declareWinner();
}
// after click on scissors button
document.getElementById('scissorsBtn').onclick = function () {
    document.getElementById('playerImg').innerHTML = "<img src='assets/scissors.png' alt='scissors'>";
    
    aiChoice();
    
    if (aiChoice() === "rock") {
        console.log("AI WON");
        aiPoints += 1;
        document.getElementById('roundDescription').innerHTML = "Rock beats Scissors!";
    }
    else if (aiChoice() === "paper") {
        console.log("YOU WON");
        playerPoints += 1;
        document.getElementById('roundDescription').innerHTML = "Scissors beats Paper!";
    }
    else {
        console.log("TIE");
        document.getElementById('roundDescription').innerHTML = "Tie!";
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