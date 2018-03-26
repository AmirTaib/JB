class BasicDate {

    private _day: number;
    private _month: number;
    private _year: number;


    public constructor(day: number, month: number, year: number) {

        this.day = day;
        this.month = month;
        this.year = year;

    }


    public toString(): string {

        return `${this.day} / ${this.month} / ${this.year}<br/>`

    }


    public get day(): number {
        return this._day;
    }
    public set day(day: number) {
        if (day - Math.floor(day) == 0 && day >= 1 && day <= 31) {
            this._day = day;
        }
        else {
            this._day = 1;
        }
    }

    public get month(): number {
        return this._month;
    }
    public set month(month: number) {
        if (month - Math.floor(month) == 0 && month >= 1 && month <= 12) {
            this._month = month;
        }
        else {
            this._month = 1;
        }
    }

    public get year(): number {
        return this._year;
    }
    public set year(year: number) {
        if (year - Math.floor(year) == 0 && year >= 2020 && year <= 2050) {
            this._year = year;
        }
        else {
            this._year = 2020;
        }
    }

}