var Game = (function () {
    function Game() {
        this.player1 = new User();
        this.player2 = new Computer();
        this.isWin = false;
    }
    Game.prototype.boardBuilder = function (gameMat) {
        var gameBoard = "---------------<br/>";
        for (var i = 0; i < gameMat.length; i++) {
            gameBoard += "|";
            for (var j = 0; j < gameMat[i].length; j++) {
                gameBoard += "&nbsp;&nbsp;" + gameMat[i][j] + "&nbsp;&nbsp;|";
            }
            gameBoard += "<br/>---------------<br/>";
        }
        document.write(gameBoard);
    };
    Game.prototype.queueOnTheGameBoard = function (gameMat, gameQueue, userTurn) {
        // פונקציה שעוברת על לוח המשחק ומסמנת במקום הנבחר
        // אם המקום כבר תפוס זורקת שגיאה
        for (var i = 0; i < Game.gameMat.length; i++) {
            for (var j = 0; j < Game.gameMat[i].length; j++) {
                if (gameQueue == Game.gameMat[i][j]) {
                    if (Game.gameMat[i][j] == "X" || Game.gameMat[i][j] == "O") {
                        ////// לזרוק שגיאה
                    }
                    else {
                        if (userTurn) {
                            Game.gameMat[i][j] = "X";
                        }
                        else {
                            Game.gameMat[i][j] = "O";
                        }
                    }
                    break;
                }
            }
        }
    };
    Game.prototype.winIndex = function (gameMat, gameQueue) {
        for (var i = 0; i < Game.winMat.length; i++) {
            for (var j = 0; j < Game.winMat[i].length; j++) {
                if (Game.winMat[i][j] == gameQueue && Game.userTurn) {
                    Game.winMat[i][j] = "X";
                }
                else if (Game.winMat[i][j] == gameQueue && !Game.userTurn) {
                    Game.winMat[i][j] = "O";
                }
            }
        }
    };
    Game.prototype.winTest = function (gameMat, gameQueue) {
        for (var i = 0; i < Game.winMat.length; i++) {
            var j = 0;
            if (Game.winMat[i][j] == "X" && Game.winMat[i][j + 1] == "X" && Game.winMat[i][j + 2] == "X") {
                alert("You won!!!");
            }
            else if (Game.winMat[i][j] == "O" && Game.winMat[i][j + 1] == "O" && Game.winMat[i][j + 2] == "O") {
                alert("The computer won!!!");
            }
        }
    };
    return Game;
}());
Game.gameMat = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];
Game.winMat = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"]
];
//[0, 1, 2],    // שורה 0
//[0, 1, 2],    // שורה 1
//[0, 1, 2],    // שורה 2
//[0, 1, 2],    // עמודה 0
//[0, 1, 2],    // עמודה 1
//[0, 1, 2],    // עמודה 2
//[0, 1, 2],    // אלכסון ראשי
//[0, 1, 2],     // אלכסון משני 
//# sourceMappingURL=game.js.map