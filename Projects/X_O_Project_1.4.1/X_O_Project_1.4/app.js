var game1 = new Game();
function startGame() {
    game1.boardBuilder();
}
function playTurn() {
    game1.nextTurn();
    if (game1.isEndGame) {
        return;
    }
}
//# sourceMappingURL=app.js.map