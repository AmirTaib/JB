var User = (function () {
    function User() {
    }
    User.prototype.userChoice = function (gameMat) {
        var isAProperNumber = false;
        while (isAProperNumber) {
            var choice = prompt("Enter your move:");
            for (var i = 0; i < game1.gameMat.length; i++) {
                for (var j = 0; j < game1.gameMat[i].length; j++) {
                    if (game1.gameMat[i][j] == choice) {
                        isAProperNumber = !isAProperNumber;
                        return choice;
                    }
                }
            }
        }
    };
    Object.defineProperty(User.prototype, "sign", {
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