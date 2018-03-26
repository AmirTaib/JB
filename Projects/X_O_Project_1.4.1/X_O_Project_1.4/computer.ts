

class Computer {


    private getWinPosition(cells: string[]) {
        let takenPlacesCount = 0;
        let positionWitNoValue = -1;
        for (let i = 0; i < cells.length; i++) {
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
    }


    private getBlockPosition(cells: string[]) {
        let takenPlacesCount = 0;
        let positionWitNoValue = -1;
        for (let i = 0; i < cells.length; i++) {
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

    }

    private getCompuerNextStep(winMat: string[][]): number | string {
        for (let i = 0; i < winMat.length; i++) {
            let cells = winMat[i];
            let nextPosition = this.getWinPosition(cells);
            if (nextPosition >= 0) {
                return nextPosition;
            }
        }

        for (let i = 0; i < winMat.length; i++) {
            let cells = winMat[i];
            let nextPosition = this.getBlockPosition(cells);
            if (nextPosition >= 0) {
                return nextPosition;
            }
        }


        return -1;

    }

    public computerChoice(gameMat: string[][], winMat: string[][]): string {

        let choice: string = "";
        let next = this.getCompuerNextStep(winMat);
        if (next >= 0) {
            return next.toString();
        }
        else {
            let emptyValues = this.getEmpty(gameMat);
            let tmpIndexRandom = Math.floor(Math.random() * emptyValues.length);
            return emptyValues[tmpIndexRandom];
        }



    }
    private getEmpty(gameMat: string[][]): string[] {
        let emp = [];
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
    }


    


}