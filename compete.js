const stayButtonComplete = document.getElementById("stay-el")
const playerSumElCompete = document.getElementById("player-sum-el")
const dealerSumElCompete = document.getElementById("dealer-sum-el")
const messageElCompete = document.getElementById("message-el")
const dealerMessageElCompete = document.getElementById("dealer-message-el")

const startButtonCompete = document.getElementById("start-game-el")
const newCardButtonCompete = document.getElementById("new-card-el")
const resetButtonCompete = document.getElementById("reset-all-el")



function compareHands() {

    dimStayCompete();

    var playerSumText = playerSumElCompete.textContent;
    var playerSum = parseInt(playerSumText);

    var dealerSumText = dealerSumElCompete.textContent;
    var dealerSum = parseInt(dealerSumText);

    var messageCompete = "";
    var dealerMessageCompete = "";

    if (playerSum == dealerSum) {
        messageCompete = "It's a tie!";
        dealerMessageCompete = "It's all good!";
        undimStartGameCompete();
    }
    else if (playerSum > dealerSum) {
        messageCompete = "You win!";
        dealerMessageCompete = "Congratulations!";
    }
    else {
        messageCompete = "You lose!";
        dealerMessageCompete = "Next time!";
    }
        messageElCompete.textContent = messageCompete;
        dealerMessageElCompete.textContent = dealerMessageCompete;

        dimNewCardCompete();
        dimStartGameCompete();
        undimStartGameCompete();

    
}







function dimStartGameCompete() {
    startButtonCompete.classList.add("dimmed")
    startButtonCompete.disabled = true
}

function undimStartGameCompete() {
    startButtonCompete.classList.remove("dimmed")
    startButtonCompete.disabled = false
}

function dimNewCardCompete() {
    newCardButtonCompete.classList.add("dimmed")
    newCardButtonCompete.disabled = true
}

function undimNewCardCompete() {
    newCardButtonCompete.classList.remove("dimmed")
    newCardButtonCompete.disabled = false
}

function dimStayCompete() {
    stayButtonComplete.classList.add("dimmed")
    stayButtonComplete.disabled = true
}
