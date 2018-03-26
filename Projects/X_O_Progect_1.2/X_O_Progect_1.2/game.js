var Game = (function () {
    function Game() {
        this.player1 = new User();
        this.player2 = new Computer();
        this._isWin = false;
        this.gameMat = [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"]
        ];
        this.winMat = [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["3", "6", "9"],
            ["1", "5", "9"],
            ["3", "5", "7"]
        ];
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
    Object.defineProperty(Game.prototype, "userTurn", {
        get: function () {
            return this._userTurn;
        },
        set: function (userTurn) {
            if (userTurn) {
                this._userTurn = userTurn;
            }
            else {
                this._userTurn = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isWin", {
        get: function () {
            return this._isWin;
        },
        set: function (isWin) {
            if (!isWin) {
                this._isWin = isWin;
            }
            else {
                this._isWin = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.queueOnTheGameBoard = function (gameMat, gameQueue, userTurn) {
        // פונקציה שעוברת על לוח המשחק ומסמנת במקום הנבחר
        // אם המקום כבר תפוס זורקת שגיאה
        for (var i = 0; i < game1.gameMat.length; i++) {
            for (var j = 0; j < game1.gameMat[i].length; j++) {
                if (gameQueue == game1.gameMat[i][j]) {
                    if (game1.gameMat[i][j] == "X" || game1.gameMat[i][j] == "O") {
                        ////// לזרוק שגיאה
                    }
                    else {
                        if (userTurn) {
                            game1.gameMat[i][j] = "X";
                        }
                        else {
                            game1.gameMat[i][j] = "O";
                        }
                    }
                    break;
                }
            }
        }
    };
    Game.prototype.winIndex = function (gameMat, gameQueue) {
        for (var i = 0; i < game1.winMat.length; i++) {
            for (var j = 0; j < game1.winMat[i].length; j++) {
                if (game1.winMat[i][j] == gameQueue && game1.userTurn) {
                    game1.winMat[i][j] = "X";
                }
                else if (game1.winMat[i][j] == gameQueue && !game1.userTurn) {
                    game1.winMat[i][j] = "O";
                }
            }
        }
    };
    Game.prototype.winTest = function (gameMat, gameQueue) {
        for (var i = 0; i < game1.winMat.length; i++) {
            var j = 0;
            if (game1.winMat[i][j] == "X" && game1.winMat[i][j + 1] == "X" && game1.winMat[i][j + 2] == "X") {
                //////////////////////////////////////////////////////////////////////////////////////////////////ניצחון משתמש
            }
            else if (game1.winMat[i][j] == "O" && game1.winMat[i][j + 1] == "O" && game1.winMat[i][j + 2] == "O") {
                //////////////////////////////////////////////////////////////////////////////////////////////////ניצחון מחשב
            }
        }
    };
    return Game;
}());
//[0, 1, 2],    // שורה 0
//[0, 1, 2],    // שורה 1
//[0, 1, 2],    // שורה 2
//[0, 1, 2],    // עמודה 0
//[0, 1, 2],    // עמודה 1
//[0, 1, 2],    // עמודה 2
//[0, 1, 2],    // אלכסון ראשי
//[0, 1, 2],     // אלכסון משני 
//# sourceMappingURL=game.js.map