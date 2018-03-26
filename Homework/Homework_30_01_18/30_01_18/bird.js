var Bird = (function () {
    function Bird(age) {
        this.age = age;
    }
    Bird.prototype.fly = function (speed) {
        document.write("I Fly at " + speed + " miles<br/>");
    };
    Bird.prototype.land = function () {
        document.write("I landed!!<br/><br/>");
        return;
    };
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age > 0) {
                this._age = age;
            }
            else {
                this._age = 10;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Bird;
}());
//# sourceMappingURL=bird.js.map