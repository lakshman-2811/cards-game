let player = {
    name : "Lucky" ,
    chips : 200
}

let cards = [];
let sum = 0;
let blackjack = false;
let alive = false;
let message = "";
let messageel = document.getElementById("message-el");
let sumel = document.getElementById("sum-el");
let cardsel = document.getElementById("cards-el");
let playerel = document.getElementById("player-el");

// console.log(cardsel);

playerel.textContent = player.name + ": $" + player.chips;

function getrandomcard() {
    let randomnumber = Math.floor(Math.random()*13)+1;
    if (randomnumber > 10) {
        return 10
    }
    else if (randomnumber === 1) {
        return 11    }
    else {
        return randomnumber
    }
}

function startgame() {
    alive = true;
    let firstcard = getrandomcard();
    let secondcard = getrandomcard();
    cards = [firstcard,secondcard];
    sum = firstcard + secondcard;
    rendergame();
}

function rendergame() {
    cardsel.textContent = "Cards : ";
    for (let i=0; i<cards.length; i++)
    {
        cardsel.textContent += cards[i] + " ";
    }

    sumel.textContent = "Sum : " + sum;
    if (sum <= 20) {
        message = "Do you want to play again??"
    }
    else if (sum === 21) {
        message = "You got the BlackJack!!";
        blackjack = true;
    }
    else {
        message = "You're out of the game!!";
        alive = false;
    }
    messageel.textContent = message;
}

function newcard() {
    if(alive === true && blackjack === false) 
    {
        let card = getrandomcard();
        sum += card;
        cards.push(card);
        console.log(cards);
        rendergame();
    }
}