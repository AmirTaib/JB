var Computer = (function () {
    function Computer() {
    }
    Computer.prototype.getWinPosition = function (cells) {
        var takenPlacesCount = 0;
        var positionWitNoValue = -1;
        for (var i = 0; i < cells.length; i++) {
            if (cells[i] == Game.PLAYER2_SIGN) {
                takenPlacesCount++;
            }
            else if (!isNaN(Number(cells[i]))) {
                positionWitNoValue = i;
            }
        }
        if (takenPlacesCount == 2 && positionWitNoValue != -1) {
            return cells[positionWitNoValue];
        }
        return -1;
    };
    Computer.prototype.getBlockPosition = function (cells) {
        var takenPlacesCount = 0;
        var positionWitNoValue = -1;
        for (var i = 0; i < cells.length; i++) {
            if (cells[i] == Game.PLAYER1_SIGN) {
                takenPlacesCount++;
            }
            else if (!isNaN(Number(cells[i]))) {
                positionWitNoValue = i;
            }
        }
        if (takenPlacesCount == 2 && positionWitNoValue != -1) {
            return cells[positionWitNoValue];
        }
        return -1;
    };
    Computer.prototype.getCompuerNextStep = function (winMat) {
        for (var i = 0; i < winMat.length; i++) {
            var cells = winMat[i];
            var nextPosition = this.getWinPosition(cells);
            if (nextPosition >= 0) {
                return nextPosition;
            }
        }
        for (var i = 0; i < winMat.length; i++) {
            var cells = winMat[i];
            var nextPosition = this.getBlockPosition(cells);
            if (nextPosition >= 0) {
                return nextPosition;
            }
        }
        return -1;
    };
    Computer.prototype.computerChoice = function (gameMat, winMat) {
        var choice = "";
        var next = this.getCompuerNextStep(winMat);
        if (next >= 0) {
            return next.toString();
        }
        else {
            var emptyValues = this.getEmpty(gameMat);
            var tmpIndexRandom = Math.floor(Math.random() * emptyValues.length);
            return emptyValues[tmpIndexRandom];
        }
    };
    Computer.prototype.getEmpty = function (gameMat) {
        var emp = [];
        for (var i = 0; i < gameMat.length; i++) {
            for (var j = 0; j < gameMat[i].length; j++) {
                if (!isNaN(Number(gameMat[i][j]))) {
                    {
                        emp.push(gameMat[i][j]);
                    }
                }
            }
        }
        return emp;
    };
    return Computer;
}());
//# sourceMappingURL=computer.js.map