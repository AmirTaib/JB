var BasicDate = (function () {
    function BasicDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    BasicDate.prototype.toString = function () {
        return this.day + " / " + this.month + " / " + this.year + "<br/>";
    };
    Object.defineProperty(BasicDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            if (day - Math.floor(day) == 0 && day >= 1 && day <= 31) {
                this._day = day;
            }
            else {
                this._day = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            if (month - Math.floor(month) == 0 && month >= 1 && month <= 12) {
                this._month = month;
            }
            else {
                this._month = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            if (year - Math.floor(year) == 0 && year >= 2020 && year <= 2050) {
                this._year = year;
            }
            else {
                this._year = 2020;
            }
        },
        enumerable: true,
        configurable: true
    });
    return BasicDate;
}());
//# sourceMappingURL=basicDate.js.map