class Game {

    public player1: User = new User();
    public player2: Computer = new Computer();

    private _userTurn: boolean;
    private _isWin: boolean = false;

    public gameMat: string[][] = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
    ];
    public winMat: string[][] = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"]
    ]


    public boardBuilder(gameMat: string[][]): void {

        let gameBoard: string = "---------------<br/>"
        for (let i: number = 0; i < gameMat.length; i++) {
            gameBoard += "|";

            for (let j: number = 0; j < gameMat[i].length; j++) {
                gameBoard += "&nbsp;&nbsp;" + gameMat[i][j] + "&nbsp;&nbsp;|"
            }

            gameBoard += "<br/>---------------<br/>";

        }

        document.write(gameBoard);
    }


    public get userTurn(): boolean {
        return this._userTurn;
    }
    public set userTurn(userTurn: boolean) {
        if (userTurn) {
            this._userTurn = userTurn;
        }
        else {
            this._userTurn = true;
        }
    }

    public get isWin(): boolean {
        return this._isWin;
    }
    public set isWin(isWin: boolean) {
        if (!isWin) {
            this._isWin = isWin;
        }
        else {
            this._isWin = false;
        }
    }

    public queueOnTheGameBoard(gameMat: string[][], gameQueue: string, userTurn: boolean) {


        // פונקציה שעוברת על לוח המשחק ומסמנת במקום הנבחר
        // אם המקום כבר תפוס זורקת שגיאה
        for (let i: number = 0; i < game1.gameMat.length; i++) {

            for (let j: number = 0; j < game1.gameMat[i].length; j++) {

                if (gameQueue == game1.gameMat[i][j]) {
                    if (game1.gameMat[i][j] == "X" || game1.gameMat[i][j] == "O") {
                        ////// לזרוק שגיאה
                    }
                    else {
                        if (userTurn) {
                            game1.gameMat[i][j] = "X"
                        }
                        else {
                            game1.gameMat[i][j] = "O"
                        }
                    }
                    break;
                }
            }
        }
    }


    public winIndex(gameMat: string[][], gameQueue: string) {

        for (let i: number = 0; i < game1.winMat.length; i++) {

            for (let j: number = 0; j < game1.winMat[i].length; j++) {

                if (game1.winMat[i][j] == gameQueue && game1.userTurn) {
                    
                        game1.winMat[i][j] = "X"
                    
                }
                else if (game1.winMat[i][j] == gameQueue && !game1.userTurn) {
                   
                        game1.winMat[i][j] = "O"
                    
                }
            }
        }
    }

    public winTest(gameMat: string[][], gameQueue: string) {
        for (let i: number = 0; i < game1.winMat.length; i++) {

            let j: number = 0

            if (game1.winMat[i][j] == "X" && game1.winMat[i][j + 1] == "X" && game1.winMat[i][j + 2] == "X") {
                //////////////////////////////////////////////////////////////////////////////////////////////////ניצחון משתמש
            }
            else if (game1.winMat[i][j] == "O" && game1.winMat[i][j + 1] == "O" && game1.winMat[i][j + 2] == "O") {
                //////////////////////////////////////////////////////////////////////////////////////////////////ניצחון מחשב
            }


        }
    }
}



        //[0, 1, 2],    // שורה 0
        //[0, 1, 2],    // שורה 1
        //[0, 1, 2],    // שורה 2
        //[0, 1, 2],    // עמודה 0
        //[0, 1, 2],    // עמודה 1
        //[0, 1, 2],    // עמודה 2
        //[0, 1, 2],    // אלכסון ראשי
        //[0, 1, 2],     // אלכסון משני