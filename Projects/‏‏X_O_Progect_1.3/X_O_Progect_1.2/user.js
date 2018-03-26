var User = (function () {
    function User() {
    }
    User.prototype.userChoice = function (gameMat) {
        var wrongChoice = false;
        var choice = prompt("Enter your move:");
        while (wrongChoice == false) {
            if (Number(choice) == NaN) {
                choice = prompt("Enter your move:<br/>(Please enter only numbers)");
            }
            else if (Number(choice) < 1 || Number(choice) > 9) {
                choice = prompt("Enter your move:<br/>(Please enter only numbers between 1-9)");
            }
            else {
                for (var i = 0; i < Game.gameMat.length; i++) {
                    for (var j = 0; j < Game.gameMat[i].length; j++) {
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
    };
    Object.defineProperty(User.prototype, "sign", {
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
        get: function () {
            return this._userSign;
        },
        set: function (sign) {
            if (sign == "X") {
                this._userSign = sign;
            }
            else {
                this._userSign = "X";
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
//# sourceMappingURL=user.js.map