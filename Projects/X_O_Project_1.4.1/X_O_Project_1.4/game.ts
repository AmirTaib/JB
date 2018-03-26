class Game {
    static readonly PLAYER1_SIGN: string = "X";
    static readonly PLAYER2_SIGN: string = "O";

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
        if (game1.isEndGame) {
            document.body.innerHTML = "";
            let gameBoard: string = "---------------<br/>"
            for (let i: number = 0; i < this.gameMat.length; i++) {
                gameBoard += "|";

                for (let j: number = 0; j < this.gameMat[i].length; j++) {
                    gameBoard += "&nbsp;&nbsp;" + this.gameMat[i][j] + "&nbsp;&nbsp;|"
                }

                gameBoard += "<br/>---------------<br/>";

            }

            document.write(gameBoard);
            document.write("Game over!!<br/>Please refresh the page for another game<br/>:)");
        }
        else {
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
    }





    public turnOnTheGameBoard(gameMat: string[][], gameTurn: string, userTurn: boolean) {

        for (let i: number = 0; i < gameMat.length; i++) {

            for (let j: number = 0; j < gameMat[i].length; j++) {

                if (gameTurn == gameMat[i][j]) {
                    
                        if (userTurn) {
                            gameMat[i][j] = Game.PLAYER1_SIGN;
                        }
                        else {
                            gameMat[i][j] = Game.PLAYER2_SIGN
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

                    winMat[i][j] = Game.PLAYER1_SIGN;

                }
                else if (winMat[i][j] == gameTurn && !this.userTurn) {

                    winMat[i][j] = Game.PLAYER2_SIGN

                }
               
            }
        }
    }

    public winTest(gameMat: string[][], winMat: string[][], gameTurn: string) {
        for (let i: number = 0; i < winMat.length; i++) {

            let j: number = 0

            if (winMat[i][j] == Game.PLAYER1_SIGN && winMat[i][j + 1] == Game.PLAYER1_SIGN && winMat[i][j + 2] == Game.PLAYER1_SIGN) {
                 game1.isEndGame = true;
                alert("You won!!!")
                break;
            }
            else if (winMat[i][j] == Game.PLAYER2_SIGN && winMat[i][j + 1] == Game.PLAYER2_SIGN && winMat[i][j + 2] == Game.PLAYER2_SIGN) {
                game1.isEndGame = true;
                alert("The computer won!!!")
                break;
            }
        }


        let signCounter: number = 0;

        for (let i: number = 0; i < gameMat.length; i++) {

            for (let j: number = 0; j < gameMat.length; j++) {

                if (gameMat[i][j] == Game.PLAYER1_SIGN || gameMat[i][j] == Game.PLAYER2_SIGN) {
                    signCounter++;
                }

            }          
        }

        if (signCounter == 9) {
            game1.isEndGame = true;
            alert("Evev game!!!")
        }


    }



    public nextTurn() {

        let gameTurn: string;


        if (this.userTurn == true) {
            gameTurn = this.player1.userChoice(this.gameMat, this.winMat);
        }
        else {
            gameTurn = this.player2.computerChoice(this.gameMat, this.winMat);
        }

        this.turnOnTheGameBoard(this.gameMat, gameTurn, this.userTurn);
        this.winIndex(this.winMat, gameTurn);
        this.winTest(this.gameMat, this.winMat, gameTurn);

        this.userTurn = !this.userTurn;

        this.boardBuilder();

    }

}

       