

let game1: Game = new Game();

function startGame() {
    game1.boardBuilder();
}


function playTurn() {
    game1.nextTurn();
    if (game1.isEndGame) {
        alert("נגמר");
    }

}



