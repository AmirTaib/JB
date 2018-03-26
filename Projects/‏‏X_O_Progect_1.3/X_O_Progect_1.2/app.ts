

let game1: Game = new Game();

while (!game1.isWin) {

    game1.boardBuilder(Game.gameMat); // פונקציה שיוצרת את לוח המשחק

    let gameQueue: string; // תור נוכחי


    if (Game.userTurn == true) {
        gameQueue = game1.player1.userChoice(Game.gameMat);
    }
    else {
        gameQueue = game1.player2.computerChoice(Game.gameMat);
    }

    game1.queueOnTheGameBoard(Game.gameMat, gameQueue, Game.userTurn);
    game1.winIndex(Game.gameMat, gameQueue);
    game1.winTest(Game.gameMat, gameQueue);

    Game.userTurn = !Game.userTurn;
}

