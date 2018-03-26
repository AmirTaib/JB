

class Computer {

    private _computerSign: string;

    private isPlaceTaken(cellValue: string): boolean {
        //isNaN(Number(cells[i]))
        return true;
    }

    private getMarkInRow(cells: string[]) {
        let takenPlacesCount = 0;
        let positionWitNoValue = 0;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i]== "O") {
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
            for (let i = 0; i < cells.length; i++) {
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

    }
    private getCompuerWinPosition(winMat: string[][]): number {
        for (let i = 0; i < winMat.length; i++) {
            let cells = winMat[i];
            let nextPosition = this.getMarkInRow(cells);
            if (nextPosition >= 0) {
                return nextPosition;
            }
        }
        return -1;

    }

    public computerChoice(winMat: string[][], gameMat: string[][]): string {

        let choice: string;


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

        let winPosition = this.getCompuerWinPosition(winMat);
        if (winPosition >= 0) {

        }
        let isEmpty: boolean = true;////////////////////////////////////////////////////////////
        do {
            let randomNumber: number = Math.floor(Math.random() * 9 + 1);

            for (let i: number = 0; i < gameMat.length; i++) {
                for (let j: number = 0; j < gameMat[i].length; j++) {
                    if (!isNaN(Number(gameMat[i][j]))) {
                        if (Number(gameMat[i][j]) == randomNumber) {
                            isEmpty = false;
                            choice = randomNumber + ""
                            for (let i: number = 0; i < winMat.length; i++) {

                                for (let j: number = 0; j < winMat[i].length; j++) {

                                    if (winMat[i][j] == choice) {

                                        winMat[i][j] = "O"
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


    }


    public get sign(): string {
        return this._computerSign;
    }


}