var User = (function () {
    function User() {
    }
    User.prototype.userChoice = function (winMat, gameMat) {
        var wrongChoice = false;
        var choice = prompt("Enter your move:");
        while (wrongChoice == false) {
            if (isNaN(Number(choice))) {
                choice = prompt("Enter your move:\n(Please enter only numbers)");
            }
            else if (Number(choice) < 1 || Number(choice) > 9) {
                choice = prompt("Enter your move:\n(Please enter only numbers between 1-9)");
            }
            else {
                for (var i = 0; i < gameMat.length; i++) {
                    for (var j = 0; j < gameMat[i].length; j++) {
                        if (gameMat[i][j] == choice) {
                            wrongChoice = true;
                            return choice;
                        }
                    }
                }
                choice = prompt("Enter your move:\n(This place is already occupied)");
            }
        }
    };
    Object.defineProperty(User.prototype, "sign", {
        get: function () {
            return this._userSign;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
//# sourceMappingURL=user.js.map