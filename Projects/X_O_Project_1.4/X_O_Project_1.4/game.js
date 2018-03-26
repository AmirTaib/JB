var Game = (function () {
    function Game() {
        this.player1 = new User();
        this.player2 = new Computer();
        this.userTurn = true;
        this.isEndGame = false;
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
    Game.prototype.boardBuilder = function () {
        document.body.innerHTML = "";
        var userText = this.userTurn ? "Please play" : "Click for computer play";
        var btnElement = "<button onclick=\"playTurn()\">" + userText + "</button>";
        var gameBoard = "---------------<br/>";
        for (var i = 0; i < this.gameMat.length; i++) {
            gameBoard += "|";
            for (var j = 0; j < this.gameMat[i].length; j++) {
                gameBoard += "&nbsp;&nbsp;" + this.gameMat[i][j] + "&nbsp;&nbsp;|";
            }
            gameBoard += "<br/>---------------<br/>";
        }
        document.write(gameBoard + btnElement);
    };
    Game.prototype.turnOnTheGameBoard = function (gameMat, gameTurn, userTurn) {
        // פונקציה שעוברת על לוח המשחק ומסמנת במקום הנבחר
        // אם המקום כבר תפוס זורקת שגיאה
        for (var i = 0; i < gameMat.length; i++) {
            for (var j = 0; j < gameMat[i].length; j++) {
                if (gameTurn == gameMat[i][j]) {
                    if (gameMat[i][j] == "X" || gameMat[i][j] == "O") {
                        alert("המקום תפוס - בדיקה שניה!!!!!!!!!!!!");
                    }
                    else {
                        if (userTurn) {
                            gameMat[i][j] = "X";
                        }
                        else {
                            gameMat[i][j] = "O";
                        }
                    }
                    break;
                }
            }
        }
    };
    Game.prototype.winIndex = function (winMat, gameTurn) {
        for (var i = 0; i < winMat.length; i++) {
            for (var j = 0; j < winMat[i].length; j++) {
                if (winMat[i][j] == gameTurn && this.userTurn) {
                    winMat[i][j] = "X";
                }
                else if (winMat[i][j] == gameTurn && !this.userTurn) {
                    winMat[i][j] = "O";
                }
            }
        }
    };
    Game.prototype.winTest = function (gameMat, winMat, gameTurn) {
        for (var i = 0; i < winMat.length; i++) {
            var j = 0;
            if (winMat[i][j] == "X" && winMat[i][j + 1] == "X" && winMat[i][j + 2] == "X") {
                game1.isEndGame = true;
                alert("You won!!!");
                break;
            }
            else if (winMat[i][j] == "O" && winMat[i][j + 1] == "O" && winMat[i][j + 2] == "O") {
                game1.isEndGame = true;
                alert("The computer won!!!");
                break;
            }
        }
        var evenTest1 = "X";
        var evenTest2 = "O";
        for (var i = 0; i < winMat.length; i++) {
            for (var j = 0; j < winMat.length; j++) {
                if (winMat[i][j] != evenTest1 && winMat[i][j] != evenTest2) {
                    evenTest1 = winMat[i][j];
                }
            }
        }
        if (evenTest1 == "X") {
            game1.isEndGame = true;
            alert("Evev game!!!");
        }
    };
    Game.prototype.nextTurn = function () {
        var gameTurn; // תור נוכחי
        if (this.userTurn == true) {
            gameTurn = this.player1.userChoice(this.gameMat, this.winMat);
        }
        else {
            gameTurn = this.player2.computerChoice(this.gameMat, this.winMat);
        }
        this.turnOnTheGameBoard(this.gameMat, gameTurn, this.userTurn);
        this.winIndex(this.gameMat, gameTurn);
        this.winTest(this.gameMat, this.winMat, gameTurn);
        this.userTurn = !this.userTurn;
        this.boardBuilder(); // פונקציה שיוצרת את לוח המשחק
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