class Product {

    public productName: string;
    private _price: number;
    public expiryDate: FullTime;

    public constructor(productName: string, price: number, expiryDate: FullTime = new FullTime(11,22,33)) {
        
        this.productName = productName;
        this.price = price;
        this.expiryDate = expiryDate;

    }


    public toString(): string {

        return `The name of a product: ${this.productName}<br/>The product price: ${this.price}<br/>Expiry date: ${this.expiryDate}<br/>`

    }

    public get price(): number {
        return this._price;
    }
    public set price(price: number) {
        if (price > 0) {
            this._price = price;
        }
        else {
            this._price = 1;
        }
    }

}