
let arrFly: Array<IFly> = new Array<IFly>(10);

for (let i: number = 0; i < arrFly.length; i++) {

    arrFly[i] = createIFly();

    if (arrFly[i] instanceof Bird) {
        document.write(`Fly ${i+1} is Bird<br/>`);
        (arrFly[i] as Bird).fly(100);
        (arrFly[i] as Bird).land();
    }
    else if (arrFly[i] instanceof Plane) {
        document.write(`Fly ${i + 1} is Plane<br/>`);
        (arrFly[i] as Plane).fly(150);
        (arrFly[i] as Plane).land();
    }
    else if (arrFly[i] instanceof Kite) {
        document.write(`Fly ${i + 1} is Kite<br/>`);
        (arrFly[i] as Kite).fly(50);
        (arrFly[i] as Kite).land();
    }
}






function createIFly(): IFly {
    let random: number = Math.floor(Math.random() * 3);
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