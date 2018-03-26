class Plane implements IFly {


    public pilotName: string;
    public airlineName: string;
    public target: string;


    fly(speed: number): void {
        document.write(`I Fly at ${speed} miles<br/>`);
    }

    land(): boolean {
        document.write(`I landed!!<br/><br/>`);
        return
    }

}