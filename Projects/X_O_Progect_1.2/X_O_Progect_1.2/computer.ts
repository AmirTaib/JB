

class Computer {

    private _computerSign: string;


    public computerChoice(gameMat: string[][]): string {
        let choice: string = prompt("Enter your move:");
        return choice;
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