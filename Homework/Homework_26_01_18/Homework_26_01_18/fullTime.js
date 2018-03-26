var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FullTime = (function (_super) {
    __extends(FullTime, _super);
    function FullTime(hour, minutes, seconds) {
        var _this = _super.call(this, 2, 3, 2030) || this;
        _this.hour = hour;
        _this.minutes = minutes;
        _this.seconds = seconds;
        return _this;
    }
    FullTime.prototype.toString = function () {
        return _super.prototype.toString.call(this) + "Time: " + this.hour + " : " + this.minutes + " : " + this.seconds + "<br/>";
    };
    Object.defineProperty(FullTime.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (hour) {
            if (hour - Math.floor(hour) == 0 && hour >= 0 && hour <= 23) {
                this._hour = hour;
            }
            else {
                this._hour = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (minutes) {
            if (minutes - Math.floor(minutes) == 0 && minutes >= 0 && minutes <= 60) {
                this._minutes = minutes;
            }
            else {
                this._minutes = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (seconds) {
            if (seconds - Math.floor(seconds) == 0 && seconds >= 0 && seconds <= 60) {
                this._seconds = seconds;
            }
            else {
                this._seconds = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    return FullTime;
}(BasicDate));
//# sourceMappingURL=fullTime.js.map