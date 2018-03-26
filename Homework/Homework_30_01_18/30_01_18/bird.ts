class Bird implements IFly {

    public birdType: string;
    private _age: number;
    public color: string;


    constructor(age: number) {

        this.age = age;

    }

    fly(speed: number): void {
        document.write(`I Fly at ${speed} miles<br/>`);
    }

    land(): boolean {
        document.write(`I landed!!<br/><br/>`);
        return
    }

    public get age(): number {
        return this._age;
    }
    public set age(age: number) {
        if (age > 0) {
            this._age = age;

        }
        else {
            this._age = 10;
        }
    }
}