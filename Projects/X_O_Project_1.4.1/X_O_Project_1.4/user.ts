
class User {

    private _userSign: string;

    public fullName: string;

    public userChoice(winMat: string[][], gameMat: string[][]): string {

        let wrongChoice: boolean = false;

        let choice: string = prompt("Enter your move:");

        while (wrongChoice == false) {

            if (isNaN(Number(choice)))  {
                choice = prompt("Enter your move:\n(Please enter only numbers)");
            }
            else if (Number(choice) < 1 || Number(choice) > 9) {
                     choice = prompt("Enter your move:\n(Please enter only numbers between 1-9)");
            }
            else {
                        for (let i: number = 0; i < gameMat.length; i++) {

                            for (let j: number = 0; j < gameMat[i].length; j++) {
                                if (gameMat[i][j] == choice) {
                                   wrongChoice = true;
                                    return choice;
                                }
                            }
                        }
                        choice = prompt("Enter your move:\n(This place is already occupied)");

                 }

        }

    }



    public get sign(): string {
        return this._userSign;
    }
   

}
