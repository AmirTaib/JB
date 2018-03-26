
class User {

    private _userSign: string;

    public fullName: string;

    public userChoice(gameMat: string[][]): string {

        let isAProperNumber: boolean = false;
        while (isAProperNumber) {
            let choice: string = prompt("Enter your move:");

            for (let i: number = 0; i < game1.gameMat.length; i++) {

                for (let j: number = 0; j < game1.gameMat[i].length; j++) {
                    if (game1.gameMat[i][j] == choice) {
                        isAProperNumber = !isAProperNumber;
                        return choice;
                    }

                }
            }
        }
    }

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
