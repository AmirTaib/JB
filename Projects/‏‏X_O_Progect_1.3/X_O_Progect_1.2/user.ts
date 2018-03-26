
class User {

    private _userSign: string;

    public fullName: string;

    public userChoice(gameMat: string[][]): string {

        let wrongChoice: boolean = false;

        let choice: string = prompt("Enter your move:");

        while (wrongChoice == false) {

            if (Number(choice) == NaN) {
                choice = prompt("Enter your move:<br/>(Please enter only numbers)");
            }
            else if (Number(choice) < 1 || Number(choice) > 9) {
                choice = prompt("Enter your move:<br/>(Please enter only numbers between 1-9)");
            }
            else {
                for (let i: number = 0; i < Game.gameMat.length; i++) {

                    for (let j: number = 0; j < Game.gameMat[i].length; j++) {
                        if (Game.gameMat[i][j] == choice) {
                            wrongChoice = true;
                            return choice;

                        }

                    }
                }
                choice = prompt("Enter your move:<br/>(This place is already occupied)");

            }

        }
        return choice;

    }

        

        //let isAProperNumber: boolean = false;

        //while (isAProperNumber) {
        //    let choice: number = Number(prompt("Enter your move:"));

        //    for (let i: number = 0; i < game1.gameMat.length; i++) {

        //        for (let j: number = 0; j < game1.gameMat[i].length; j++) {
        //            if (game1.gameMat[i][j] == choice) {
        //                isAProperNumber = !isAProperNumber;
        //                return choice;
        //            }

        //        }
        //    }
        //}
    

    public get sign(): string {
        return this._userSign;
    }
    public set sign(sign: string) {
        if (sign=="X") {
            this._userSign = sign;
        }
        else {
            this._userSign = "X";
        }
    }

}
