class Game {

    public player1: User = new User();
    public player2: Computer = new Computer();

    public userTurn: boolean = true;
    public isEndGame: boolean = false;

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
    ];


    public boardBuilder(): void {
        document.body.innerHTML = "";
        const userText = this.userTurn ? "Please play" : "Click for computer play";
        let btnElement: string = `<button onclick="playTurn()">${userText}</button>`;
        let gameBoard: string = "---------------<br/>"
        for (let i: number = 0; i < this.gameMat.length; i++) {
            gameBoard += "|";

            for (let j: number = 0; j < this.gameMat[i].length; j++) {
                gameBoard += "&nbsp;&nbsp;" + this.gameMat[i][j] + "&nbsp;&nbsp;|"
            }

            gameBoard += "<br/>---------------<br/>";

        }

        document.write(gameBoard + btnElement);
    }





    public turnOnTheGameBoard(gameMat: string[][], gameTurn: string, userTurn: boolean) {


        // פונקציה שעוברת על לוח המשחק ומסמנת במקום הנבחר
        // אם המקום כבר תפוס זורקת שגיאה
        for (let i: number = 0; i < gameMat.length; i++) {

            for (let j: number = 0; j < gameMat[i].length; j++) {

                if (gameTurn == gameMat[i][j]) {
                    if (gameMat[i][j] == "X" || gameMat[i][j] == "O") {
                        alert("המקום תפוס - בדיקה שניה!!!!!!!!!!!!")
                    }
                    else {
                        if (userTurn) {
                            gameMat[i][j] = "X"
                        }
                        else {
                            gameMat[i][j] = "O"
                        }
                    }
                    break;
                }
            }
        }
    }


    public winIndex(winMat: string[][], gameTurn: string) {

        for (let i: number = 0; i < winMat.length; i++) {

            for (let j: number = 0; j < winMat[i].length; j++) {

                if (winMat[i][j] == gameTurn && this.userTurn) {

                    winMat[i][j] = "X"

                }
                else if (winMat[i][j] == gameTurn && !this.userTurn) {

                    winMat[i][j] = "O"

                }
               
            }
        }
    }

    public winTest(gameMat: string[][], winMat: string[][], gameTurn: string) {
        for (let i: number = 0; i < winMat.length; i++) {

            let j: number = 0

            if (winMat[i][j] == "X" && winMat[i][j + 1] == "X" && winMat[i][j + 2] == "X") {
                 game1.isEndGame = true;
                alert("You won!!!")
                break;
            }
            else if (winMat[i][j] == "O" && winMat[i][j + 1] == "O" && winMat[i][j + 2] == "O") {
                game1.isEndGame = true;
                alert("The computer won!!!")
                break;
            }
        }


        let evenTest1: string = "X";
        let evenTest2: string = "O";

        for (let i: number = 0; i < winMat.length; i++) {

            for (let j: number = 0; j < winMat.length; j++) {

                if (winMat[i][j] != evenTest1 && winMat[i][j] != evenTest2) {
                    evenTest1 = winMat[i][j];
                }

            }          
        }

        if (evenTest1 == "X") {
            game1.isEndGame = true;
            alert("Evev game!!!")
        }


    }



    public nextTurn() {

        let gameTurn: string; // תור נוכחי


        if (this.userTurn == true) {
            gameTurn = this.player1.userChoice(this.gameMat, this.winMat);
        }
        else {
            gameTurn = this.player2.computerChoice(this.gameMat, this.winMat);
        }

        this.turnOnTheGameBoard(this.gameMat, gameTurn, this.userTurn);
        this.winIndex(this.gameMat, gameTurn);
        this.winTest(this.gameMat, this.winMat, gameTurn);

        this.userTurn = !this.userTurn;

        this.boardBuilder(); // פונקציה שיוצרת את לוח המשחק

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