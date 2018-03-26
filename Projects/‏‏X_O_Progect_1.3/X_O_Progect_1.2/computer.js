var Computer = (function () {
    function Computer() {
    }
    Computer.prototype.computerChoice = function (winMat) {
        var choice;
        for (var i = 0; i < Game.winMat.length; i++) {
            var j = 0;
            if (Game.winMat[i][j] == "O" && Game.winMat[i][j + 1] == "O" && Game.winMat[i][j + 2] != "X" && Game.winMat[i][j + 2] != "O") {
                choice = Game.winMat[i][j + 2];
                Game.winMat[i][j + 2] = "O";
                return choice;
            }
            else if (Game.winMat[i][j] == "O" && Game.winMat[i][j + 2] == "O" && Game.winMat[i][j + 1] != "X" && Game.winMat[i][j + 1] != "O") {
                choice = Game.winMat[i][j + 1];
                Game.winMat[i][j + 1] = "O";
                return choice;
            }
            else if (Game.winMat[i][j + 1] == "O" && Game.winMat[i][j + 2] == "O" && Game.winMat[i][j] != "X" && Game.winMat[i][j] != "O") {
                choice = Game.winMat[i][j];
                Game.winMat[i][j] = "O";
                return choice;
            }
            if (Game.winMat[i][j] == "X" && Game.winMat[i][j + 1] == "X" && Game.winMat[i][j + 2] != "X" && Game.winMat[i][j + 2] != "O") {
                choice = Game.winMat[i][j + 2];
                Game.winMat[i][j + 2] = "O";
                return choice;
            }
            else if (Game.winMat[i][j] == "X" && Game.winMat[i][j + 2] == "X" && Game.winMat[i][j + 1] != "X" && Game.winMat[i][j + 1] != "O") {
                choice = Game.winMat[i][j + 1];
                Game.winMat[i][j + 1] = "O";
                return choice;
            }
            else if (Game.winMat[i][j + 1] == "X" && Game.winMat[i][j + 2] == "X" && Game.winMat[i][j] != "X" && Game.winMat[i][j] != "O") {
                choice = Game.winMat[i][j];
                Game.winMat[i][j] = "O";
                return choice;
            }
            else {
                var isEmpty = true;
                do {
                    var randomNumber = Math.floor(Math.random() * 9);
                    for (var i_1 = 0; i_1 < Game.gameMat.length; i_1++) {
                        for (var j_1 = 0; j_1 < Game.gameMat[i_1].length; j_1++) {
                            if (Number(Game.gameMat[i_1][j_1]) == randomNumber) {
                                isEmpty = false;
                                return randomNumber + "";
                            }
                        }
                    }
                } while (isEmpty = true);
            }
        }
    };
    Object.defineProperty(Computer.prototype, "sign", {
        get: function () {
            return this._computerSign;
        },
        set: function (sign) {
            if (sign == "O") {
                this._computerSign = sign;
            }
            else {
                this._computerSign = "O";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Computer;
}());
//# sourceMappingURL=computer.js.map