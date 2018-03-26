var arrFly = new Array(10);
for (var i = 0; i < arrFly.length; i++) {
    arrFly[i] = createIFly();
    if (arrFly[i] instanceof Bird) {
        document.write("Fly " + (i + 1) + " is Bird<br/>");
        arrFly[i].fly(100);
        arrFly[i].land();
    }
    else if (arrFly[i] instanceof Plane) {
        document.write("Fly " + (i + 1) + " is Plane<br/>");
        arrFly[i].fly(150);
        arrFly[i].land();
    }
    else if (arrFly[i] instanceof Kite) {
        document.write("Fly " + (i + 1) + " is Kite<br/>");
        arrFly[i].fly(50);
        arrFly[i].land();
    }
}
function createIFly() {
    var random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return new Bird(5);
    }
    else if (random == 1) {
        return new Plane();
    }
    else if (random == 2) {
        return new Kite(50);
    }
}
//# sourceMappingURL=app.js.map