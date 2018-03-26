var Computer = (function () {
    function Computer() {
    }
    Computer.prototype.isPlaceTaken = function (cellValue) {
        //isNaN(Number(cells[i]))
        return true;
    };
    Computer.prototype.getMarkInRow = function (cells) {
        var takenPlacesCount = 0;
        var positionWitNoValue = 0;
        for (var i = 0; i < cells.length; i++) {
            if (cells[i] == "O") {
                takenPlacesCount++;
            }
            else {
                positionWitNoValue = i;
            }
        }
        if (takenPlacesCount == 2) {
            return positionWitNoValue;
        }
        else {
            for (var i = 0; i < cells.length; i++) {
                if (cells[i] == "X") {
                    takenPlacesCount++;
                }
                else {
                    positionWitNoValue = i;
                }
            }
            if (takenPlacesCount == 2) {
                return positionWitNoValue;
            }
        }
        return -1;
    };
    Computer.prototype.getCompuerWinPosition = function (winMat) {
        for (var i = 0; i < winMat.length; i++) {
            var cells = winMat[i];
            var nextPosition = this.getMarkInRow(cells);
            if (nextPosition >= 0) {
                return nextPosition;
            }
        }
        return -1;
    };
    Computer.prototype.computerChoice = function (winMat, gameMat) {
        var choice;
        //for (let i: number = 0; i < winMat.length; i++) {
        //    let j: number = 0
        //    if (winMat[i][j] == "O" && winMat[i][j + 1] == "O" && winMat[i][j + 2] != "X" && winMat[i][j + 2] != "O") {
        //        choice = winMat[i][j + 2];
        //        winMat[i][j + 2] = "O";
        //        return choice;
        //    }
        //    else if (winMat[i][j] == "O" && winMat[i][j + 2] == "O" && winMat[i][j + 1] != "X" && winMat[i][j + 1] != "O") {
        //        choice = winMat[i][j + 1];
        //        winMat[i][j + 1] = "O";
        //        return choice;
        //    }
        //    else if (winMat[i][j+1] == "O" && winMat[i][j + 2] == "O" && winMat[i][j] != "X" && winMat[i][j] != "O") {
        //        choice = winMat[i][j];
        //        winMat[i][j] = "O";
        //        return choice;
        //    }
        //    else if (winMat[i][j] == "X" && winMat[i][j + 1] == "X" && winMat[i][j + 2] != "X" && winMat[i][j + 2] != "O") {
        //        choice = winMat[i][j + 2];
        //        winMat[i][j + 2] = "O";
        //        return choice;
        //    }
        //    else if (winMat[i][j] == "X" && winMat[i][j + 2] == "X" && winMat[i][j + 1] != "X" && winMat[i][j + 1] != "O") {
        //        choice = winMat[i][j + 1];
        //        winMat[i][j + 1] = "O";
        //        return choice;
        //    }
        //    else if (winMat[i][j + 1] == "X" && winMat[i][j + 2] == "X" && winMat[i][j] != "X" && winMat[i][j] != "O") {
        //        choice = winMat[i][j];
        //        winMat[i][j] = "O";
        //        return choice;
        //    }
        //}
        var winPosition = this.getCompuerWinPosition(winMat);
        if (winPosition >= 0) {
        }
        var isEmpty = true; ////////////////////////////////////////////////////////////
        do {
            var randomNumber = Math.floor(Math.random() * 9 + 1);
            for (var i = 0; i < gameMat.length; i++) {
                for (var j = 0; j < gameMat[i].length; j++) {
                    if (!isNaN(Number(gameMat[i][j]))) {
                        if (Number(gameMat[i][j]) == randomNumber) {
                            isEmpty = false;
                            choice = randomNumber + "";
                            for (var i_1 = 0; i_1 < winMat.length; i_1++) {
                                for (var j_1 = 0; j_1 < winMat[i_1].length; j_1++) {
                                    if (winMat[i_1][j_1] == choice) {
                                        winMat[i_1][j_1] = "O";
                                        return choice;
                                    }
                                }
                            }
                            return choice;
                        }
                    }
                }
            }
        } while (isEmpty = true);
    };
    Object.defineProperty(Computer.prototype, "sign", {
        get: function () {
            return this._computerSign;
        },
        enumerable: true,
        configurable: true
    });
    return Computer;
}());
//# sourceMappingURL=computer.js.map