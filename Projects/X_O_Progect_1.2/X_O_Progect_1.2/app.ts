

let game1: Game = new Game();


for (let i: number = 0; i < 9; i++) {

    game1.boardBuilder(game1.gameMat); // פונקציה שיוצרת את לוח המשחק
    
    let gameQueue: string; // תור נוכחי

    if (game1.userTurn) {
        gameQueue = game1.player1.userChoice(game1.gameMat);       
    }
    else {
        gameQueue = game1.player2.computerChoice(game1.gameMat);        
    }

    game1.queueOnTheGameBoard(game1.gameMat, gameQueue, game1.userTurn);
    game1.winIndex(game1.gameMat, gameQueue);
    game1.winTest(game1.gameMat, gameQueue);

    game1.userTurn = !game1.userTurn;
   
}



