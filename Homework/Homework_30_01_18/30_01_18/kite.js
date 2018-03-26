var Kite = (function () {
    function Kite(price) {
        this.price = price;
    }
    Kite.prototype.fly = function (speed) {
        document.write("I Fly at " + speed + " miles<br/>");
    };
    Kite.prototype.land = function () {
        document.write("I landed!!<br/><br/>");
        return;
    };
    Object.defineProperty(Kite.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price > 0) {
                this._price = price;
            }
            else {
                this._price = 10;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Kite;
}());
//# sourceMappingURL=kite.js.map