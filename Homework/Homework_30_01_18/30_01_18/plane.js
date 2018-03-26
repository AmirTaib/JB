var Plane = (function () {
    function Plane() {
    }
    Plane.prototype.fly = function (speed) {
        document.write("I Fly at " + speed + " miles<br/>");
    };
    Plane.prototype.land = function () {
        document.write("I landed!!<br/><br/>");
        return;
    };
    return Plane;
}());
//# sourceMappingURL=plane.js.map