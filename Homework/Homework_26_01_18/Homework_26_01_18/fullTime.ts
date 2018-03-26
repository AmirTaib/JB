class FullTime extends BasicDate {

    private _hour: number;
    private _minutes: number;
    private _seconds: number;


    public constructor(hour: number, minutes: number, seconds: number) {
        super(2, 3, 2030)
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;

    }


    public toString(): string {
        
        return `${super.toString()}Time: ${this.hour} : ${this.minutes} : ${this.seconds}<br/>`

    }


    public get hour(): number {
        return this._hour;
    }
    public set hour(hour: number) {
        if (hour - Math.floor(hour) == 0 && hour >= 0 && hour <= 23) {
            this._hour = hour;
        }
        else {
            this._hour = 1;
        }
    }

    public get minutes(): number {
        return this._minutes;
    }
    public set minutes(minutes: number) {
        if (minutes - Math.floor(minutes) == 0 && minutes >= 0 && minutes <= 60) {
            this._minutes = minutes;
        }
        else {
            this._minutes = 1;
        }
    }

    public get seconds(): number {
        return this._seconds;
    }
    public set seconds(seconds: number) {
        if (seconds - Math.floor(seconds) == 0 && seconds >= 0 && seconds <= 60) {
            this._seconds = seconds;
        }
        else {
            this._seconds = 1;
        }
    }

}