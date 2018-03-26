class Kite implements IFly {


    public color: string;
    private _price: number;


    constructor(price: number) {

        this.price = price;

    }


    fly(speed: number): void {
        document.write(`I Fly at ${speed} miles<br/>`);
    }

    land(): boolean {
        document.write(`I landed!!<br/><br/>`);
        return
    }

    public get price(): number {
        return this._price;
    }
    public set price(price: number) {
        if (price > 0) {
            this._price = price;

        }
        else {
            this._price = 10;
        }
    }
}