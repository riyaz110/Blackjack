

// Dealer Stats
let cardsDealer = []
let hasBlackJackDealer = false
let isAliveDealer = true
let dealerMessage = ""
let cardNumberDealer = 0


let dealerMessageEl = document.getElementById("dealer-message-el")
let playerMessageElDealEl = document.getElementById("message-el")

let dealerCardsEl = document.getElementById("dealer-cards-el")
let dealerSumEl = document.getElementById("dealer-sum-el")


const dealerCardOneImage = document.getElementById("dealer-card-one-el")
const dealerCardTwoImage = document.getElementById("dealer-card-two-el")
const cardImagesDealerEl = document.getElementById("card-images-dealer-el")

const stayButtonDealer = document.getElementById("stay-el")






// Assign Random Card to Player


const cardDeckTwo = {
    cardImagesTwo: [
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


    assignDealerRandomCard: function() {

        const dealerCardAssigned = Math.floor(Math.random() * this.cardImagesTwo.length);
        const dealerCardObject = this.cardImagesTwo[dealerCardAssigned]; 
        const dealerCardIndex = this.cardImagesTwo.indexOf(dealerCardObject) + 1;
        const dealerCardImage = dealerCardObject.filename;
        const dealerCardValue = dealerCardObject.value;

        return { dealerCardImage, dealerCardValue }

    }
};




function hideDealerImages() {

    dealerCardOneImage.style.display = "none";
    dealerCardTwoImage.style.display = "none";

}





// Assign Random Card to Dealer
function drawDealerCard() {  

    hideDealerImages();

    const { dealerCardImage, dealerCardValue } = cardDeckTwo.assignDealerRandomCard();
    
    const newDealerCardImage = document.createElement("img");
    newDealerCardImage.src = `images/cards/${dealerCardImage}`;

    cardImagesDealerEl.appendChild(newDealerCardImage);
    
    cardsDealer.push(dealerCardValue);
  

};



function dealerRules() {
    var dealerSum = cardsDealer.reduce((acc, val) => acc + val, 0);
    dealerSumEl.textContent = dealerSum;
    dealerCardsEl.textContent = cardsDealer.join(", ");

    if (dealerSum <= 14) {
        newCardForDealer();
        dealerMessage = "Dealer drew!";
    
        return;

    } else if (dealerSum > 14 && dealerSum <= 20) {
        dealerMessage = "Dealer stays!";
        return;

    } else if (dealerSum == 21) {
        dealerMessage = "Oh No! Dealer has Blackjack!";
        // playerMessageElDealEl.style.display = "none";
        hasBlackJackDealer = true;
        dimNewCard();
        dimStayDealer();
        undimStartGame();

    } else if (dealerSum > 21) {
        dealerMessage = "Dealer Loses!";
        // playerMessageElDealEl.style.display = "none";
        isAliveDealer = false;
        dimNewCard();
        dimStayDealer();
        undimStartGame();

    };
    dealerMessageEl.textContent = dealerMessage
    return;
};




function startDealerGame() {
    
    removeDealerImages();
    resetDealerGame()
    drawDealerCard()
    drawDealerCard()
    dealerRules()

}

function resetDealerGame() {

    cardsDealer = []
    hasBlackJackDealer = false
    isAliveDealer = true
    dealerMessage = ""
    dealerMessageEl.textContent = "Take a Chance!"
    cardNumberDealer = 0
    dealerCardsEl.textContent = ""
    dealerSumEl.textContent = ""
    cardImagesDealerEl.textContent = ""
    
}



function removeDealerImages() {

    while (cardImagesDealerEl.firstChild) {
        cardImagesDealerEl.removeChild(cardImagesDealerEl.firstChild);
    }
}

function newCardForDealer() {

    drawDealerCard()
    dealerRules()

}

function clearAll() {
    location.reload();
}









//Reset Functions





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


function dimStayDealer() {
    stayButtonDealer.classList.add("dimmed")
    stayButtonDealer.disabled = true
}

function undimStayDealer() {
    stayButtonDealer.classList.remove("dimmed")
    stayButtonDealer.disabled = false
}

