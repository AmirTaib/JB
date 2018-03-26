var Computer = (function () {
    function Computer() {
    }
    Computer.prototype.computerChoice = function (gameMat) {
        var choice = prompt("Enter your move:");
        return choice;
    };
    Object.defineProperty(Computer.prototype, "sign", {
        get: function () {
            return this._computerSign;
        },
        set: function (sign) {
            if (sign == "O") {
                this._computerSign = sign;
            }
            else {
                this._computerSign = "O";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Computer;
}());
//# sourceMappingURL=computer.js.map