

class Computer {

    private _computerSign: string;


    public computerChoice(winMat: string[][]): string {

        let choice: string;


        for (let i: number = 0; i < Game.winMat.length; i++) {

            let j: number = 0

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
            else if (Game.winMat[i][j+1] == "O" && Game.winMat[i][j + 2] == "O" && Game.winMat[i][j] != "X" && Game.winMat[i][j] != "O") {
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
                    let isEmpty: boolean = true;
                    do {
                        let randomNumber: number = Math.floor(Math.random() * 9);

                        for (let i: number = 0; i < Game.gameMat.length; i++) {

                            for (let j: number = 0; j < Game.gameMat[i].length; j++) {
                                if (Number(Game.gameMat[i][j]) == randomNumber) {
                                    isEmpty = false;
                                    return randomNumber + "";
                                }
                            }
                        }

                    } while (isEmpty = true);                    

                 }
        }
    }


    public get sign(): string {
        return this._computerSign;
    }
    public set sign(sign: string) {
        if (sign == "O") {
            this._computerSign = sign;
        }
        else {
            this._computerSign = "O";
        }
    }

}