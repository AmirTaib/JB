var Product = (function () {
    function Product(productName, price, expiryDate) {
        if (expiryDate === void 0) { expiryDate = new FullTime(11, 22, 33); }
        this.productName = productName;
        this.price = price;
        this.expiryDate = expiryDate;
    }
    Product.prototype.toString = function () {
        return "The name of a product: " + this.productName + "<br/>The product price: " + this.price + "<br/>Expiry date: " + this.expiryDate + "<br/>";
    };
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price > 0) {
                this._price = price;
            }
            else {
                this._price = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
//# sourceMappingURL=product.js.map