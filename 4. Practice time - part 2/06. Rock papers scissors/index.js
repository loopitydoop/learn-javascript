let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function throwHand() {
    return hands[Math.floor(Math.random() * 3)]; // produces values from 0 to 2...)
}

console.log(throwHand());

// for fun, make a rps game:
let RpsRules = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper"
};

let player1 = {name: "player 1",
    move: throwHand(),
    isWin: false
};

let player2 = {name: "player 2",
    move: throwHand(),
    isWin: false
};

console.log(`${player1.name} throws ${player1.move}!`);
console.log(`${player2.name} throws ${player2.move}!`);

// evaluate if player 1 wins
if (RpsRules[player1.move] === player2.move) {
    player1.isWin = true;
}

// evaluate if player 2 wins
if (RpsRules[player2.move] === player1.move) {
    player2.isWin = true;
}

if (player1.isWin === true) {
    console.log(`${player1.name} wins!`);
} else if (player2.isWin === true) {
    console.log(`${player2.name} wins!`);
} else {
    console.log("it's a tie!");
}