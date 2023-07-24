class ShoppingBasket {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        let amount = 0;
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].getPrice())
            amount = amount + this.items[i].getPrice();
        }

        return amount;
    }
}

module.exports = { ShoppingBasket };