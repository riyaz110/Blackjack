
// Player Stats
let cards = []
let hasBlackJack = false
let isAlive = true
let message = ""
let cardNumber = 0




let messageEl = document.getElementById("message-el")

let playerCardsEl = document.getElementById("player-cards-el")
let playerSumEl = document.getElementById("player-sum-el")


const startButton = document.getElementById("start-game-el")
const newCardButton = document.getElementById("new-card-el")
const stayButton = document.getElementById("stay-el") 
const resetButton = document.getElementById("reset-all-el")

const playerCardOneImage = document.getElementById("player-card-one-el")
const playerCardTwoImage = document.getElementById("player-card-two-el")
const cardImagesPlayerEl = document.getElementById("card-images-player-el")





// Assign Random Card to Player

const cardDeckOne = {
    cardImagesOne: [
        { filename: "2C.png", value: 2 },
        { filename: "2D.png", value: 2 },
        { filename: "2H.png", value: 2 },
        { filename: "2S.png", value: 2 },
        { filename: "3C.png", value: 3 },
        { filename: "3D.png", value: 3 },
        { filename: "3H.png", value: 3 },
        { filename: "3S.png", value: 3 },
        { filename: "4C.png", value: 4 },
        { filename: "4D.png", value: 4 },
        { filename: "4H.png", value: 4 },
        { filename: "4S.png", value: 4 },
        { filename: "5C.png", value: 5 },
        { filename: "5D.png", value: 5 },
        { filename: "5H.png", value: 5 },
        { filename: "5S.png", value: 5 },
        { filename: "6C.png", value: 6 },
        { filename: "6D.png", value: 6 },
        { filename: "6H.png", value: 6 },
        { filename: "6S.png", value: 6 },
        { filename: "7C.png", value: 7 },
        { filename: "7D.png", value: 7 },
        { filename: "7H.png", value: 7 },
        { filename: "7S.png", value: 7 },
        { filename: "8C.png", value: 8 },
        { filename: "8D.png", value: 8 },
        { filename: "8H.png", value: 8 },
        { filename: "8S.png", value: 8 },
        { filename: "9C.png", value: 9 },
        { filename: "9D.png", value: 9 },
        { filename: "9H.png", value: 9 },
        { filename: "9S.png", value: 9 },
        { filename: "10C.png", value: 10 },
        { filename: "10D.png", value: 10 },
        { filename: "10H.png", value: 10 },
        { filename: "10S.png", value: 10 },
        { filename: "AC.png", value: 11 },
        { filename: "AD.png", value: 11 },
        { filename: "AH.png", value: 11 },
        { filename: "AS.png", value: 11 },
        { filename: "JC.png", value: 10 },
        { filename: "JD.png", value: 10 },
        { filename: "JH.png", value: 10 },
        { filename: "JS.png", value: 10 },
        { filename: "KC.png", value: 10 },
        { filename: "KD.png", value: 10 },
        { filename: "KH.png", value: 10 },
        { filename: "KS.png", value: 10 },
        { filename: "QC.png", value: 10 },
        { filename: "QD.png", value: 10 },
        { filename: "QH.png", value: 10 },
        { filename: "QS.png", value: 10 },], 


    assignPlayerRandomCard: function() {

        const playerCardAssigned = Math.floor(Math.random() * this.cardImagesOne.length);
        const playerCardObject = this.cardImagesOne[playerCardAssigned]; 
        const playerCardIndex = this.cardImagesOne.indexOf(playerCardObject) + 1;
        const playerCardImage = playerCardObject.filename;
        const playerCardValue = playerCardObject.value;

        return { playerCardImage, playerCardValue }

    }

};


function hidePlayerImages() {

    playerCardOneImage.style.display = "";
    playerCardTwoImage.style.display = "";

}



function drawPlayerCard() {  

    hidePlayerImages()  

    const { playerCardImage, playerCardValue } = cardDeckOne.assignPlayerRandomCard();
    
    const newPlayerCardImage = document.createElement("img")
    newPlayerCardImage.src = `images/cards/${playerCardImage}`;

    cardImagesPlayerEl.appendChild(newPlayerCardImage);

    
    cards.push(playerCardValue)
  

}


function playerRules() {

    var playerSum = cards.reduce((acc, val) => acc + val, 0)
    playerSumEl.textContent = playerSum
    playerCardsEl.textContent = cards.join(", ")

    if (playerSum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (playerSum == 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        dimNewCard()
        dimStay()
        undimStartGame()


    } else {
        message = "You're out of the game! Dealer Wins!"
        isAlive = false
        dimNewCard()
        dimStay()
        undimStartGame()

    }
    messageEl.textContent = message;

}











// Game Actions

function startPlayerGame() {
        
    resetPlayerGame()

    drawPlayerCard()
    drawPlayerCard()
    playerRules()


    dimStartGame()
    undimNewCard()
}



function newCard() {

    drawPlayerCard()
    playerRules()

}

function clearAll() {
    location.reload();
}









//Reset Functions

function resetPlayerGame() {
    cards = []
    hasBlackJack = false
    isAlive = true
    message = ""
    cardNumber = 0
    messageEl.textContent = ""
    playerCardsEl.textContent = ""
    playerSumEl.textContent = ""
    removePlayerImages()
    undimStartGame()
    undimStay()
    dimNewCard()



}


function removePlayerImages() {

    while (cardImagesPlayerEl.firstChild) {
        cardImagesPlayerEl.removeChild(cardImagesPlayerEl.firstChild);
    }
}



function dimStartGame() {
    startButton.classList.add("dimmed")
    startButton.disabled = true
}

function undimStartGame() {
    startButton.classList.remove("dimmed")
    startButton.disabled = false
}

function dimNewCard() {
    newCardButton.classList.add("dimmed")
    newCardButton.disabled = true
}

function undimNewCard() {
    newCardButton.classList.remove("dimmed")
    newCardButton.disabled = false
}


function dimStay() {
    stayButton.classList.add("dimmed")
    stayButton.disabled = true
}

function undimStay() {
    stayButton.classList.remove("dimmed")
    stayButton.disabled = false
}

function stopConfetti() {

    const confettiDivEl = document.getElementById("confetti-container");
    confettiDivEl.classList.remove("confetti");

}


