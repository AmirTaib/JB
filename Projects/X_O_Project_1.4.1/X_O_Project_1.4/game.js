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
        if (game1.isEndGame) {
            document.body.innerHTML = "";
            var gameBoard = "---------------<br/>";
            for (var i = 0; i < this.gameMat.length; i++) {
                gameBoard += "|";
                for (var j = 0; j < this.gameMat[i].length; j++) {
                    gameBoard += "&nbsp;&nbsp;" + this.gameMat[i][j] + "&nbsp;&nbsp;|";
                }
                gameBoard += "<br/>---------------<br/>";
            }
            document.write(gameBoard);
            document.write("Game over!!<br/>Please refresh the page for another game<br/>:)");
        }
        else {
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
        }
    };
    Game.prototype.turnOnTheGameBoard = function (gameMat, gameTurn, userTurn) {
        for (var i = 0; i < gameMat.length; i++) {
            for (var j = 0; j < gameMat[i].length; j++) {
                if (gameTurn == gameMat[i][j]) {
                    if (userTurn) {
                        gameMat[i][j] = Game.PLAYER1_SIGN;
                    }
                    else {
                        gameMat[i][j] = Game.PLAYER2_SIGN;
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
                    winMat[i][j] = Game.PLAYER1_SIGN;
                }
                else if (winMat[i][j] == gameTurn && !this.userTurn) {
                    winMat[i][j] = Game.PLAYER2_SIGN;
                }
            }
        }
    };
    Game.prototype.winTest = function (gameMat, winMat, gameTurn) {
        for (var i = 0; i < winMat.length; i++) {
            var j = 0;
            if (winMat[i][j] == Game.PLAYER1_SIGN && winMat[i][j + 1] == Game.PLAYER1_SIGN && winMat[i][j + 2] == Game.PLAYER1_SIGN) {
                game1.isEndGame = true;
                alert("You won!!!");
                break;
            }
            else if (winMat[i][j] == Game.PLAYER2_SIGN && winMat[i][j + 1] == Game.PLAYER2_SIGN && winMat[i][j + 2] == Game.PLAYER2_SIGN) {
                game1.isEndGame = true;
                alert("The computer won!!!");
                break;
            }
        }
        var signCounter = 0;
        for (var i = 0; i < gameMat.length; i++) {
            for (var j = 0; j < gameMat.length; j++) {
                if (gameMat[i][j] == Game.PLAYER1_SIGN || gameMat[i][j] == Game.PLAYER2_SIGN) {
                    signCounter++;
                }
            }
        }
        if (signCounter == 9) {
            game1.isEndGame = true;
            alert("Evev game!!!");
        }
    };
    Game.prototype.nextTurn = function () {
        var gameTurn;
        if (this.userTurn == true) {
            gameTurn = this.player1.userChoice(this.gameMat, this.winMat);
        }
        else {
            gameTurn = this.player2.computerChoice(this.gameMat, this.winMat);
        }
        this.turnOnTheGameBoard(this.gameMat, gameTurn, this.userTurn);
        this.winIndex(this.winMat, gameTurn);
        this.winTest(this.gameMat, this.winMat, gameTurn);
        this.userTurn = !this.userTurn;
        this.boardBuilder();
    };
    return Game;
}());
Game.PLAYER1_SIGN = "X";
Game.PLAYER2_SIGN = "O";
//# sourceMappingURL=game.js.map