class Game {

    public player1: User = new User();
    public player2: Computer = new Computer();

    public static userTurn: boolean;
    public isWin: boolean = false;

    public static gameMat: string[][] = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
    ];
    public static winMat: string[][] = [
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


    


    public queueOnTheGameBoard(gameMat: string[][], gameQueue: string, userTurn: boolean) {


        // פונקציה שעוברת על לוח המשחק ומסמנת במקום הנבחר
        // אם המקום כבר תפוס זורקת שגיאה
        for (let i: number = 0; i < Game.gameMat.length; i++) {

            for (let j: number = 0; j < Game.gameMat[i].length; j++) {

                if (gameQueue == Game.gameMat[i][j]) {
                    if (Game.gameMat[i][j] == "X" || Game.gameMat[i][j] == "O") {
                        ////// לזרוק שגיאה
                    }
                    else {
                        if (userTurn) {
                            Game.gameMat[i][j] = "X"
                        }
                        else {
                            Game.gameMat[i][j] = "O"
                        }
                    }
                    break;
                }
            }
        }
    }


    public winIndex(gameMat: string[][], gameQueue: string) {

        for (let i: number = 0; i < Game.winMat.length; i++) {

            for (let j: number = 0; j < Game.winMat[i].length; j++) {

                if (Game.winMat[i][j] == gameQueue && Game.userTurn) {
                    
                    Game.winMat[i][j] = "X"
                    
                }
                else if (Game.winMat[i][j] == gameQueue && !Game.userTurn) {
                   
                    Game.winMat[i][j] = "O"
                    
                }
            }
        }
    }

    public winTest(gameMat: string[][], gameQueue: string) {
        for (let i: number = 0; i < Game.winMat.length; i++) {

            let j: number = 0

            if (Game.winMat[i][j] == "X" && Game.winMat[i][j + 1] == "X" && Game.winMat[i][j + 2] == "X") {
                alert("You won!!!")
            }
            else if (Game.winMat[i][j] == "O" && Game.winMat[i][j + 1] == "O" && Game.winMat[i][j + 2] == "O") {
                alert("The computer won!!!")
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