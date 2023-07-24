const { ShoppingBasket } = require("../src/shoppingBasket")
const { Candy } = require("../src/candy");

describe("ShoppingBasket", () => {
    let basket;
    const candy1 = new Candy("Mars", 3.99);
    const candy2 = new Candy("Skittles", 1.99);

    it("Should allow items to be added to it", () => {
        basket = new ShoppingBasket()
        basket.addItem(candy1)
        expect(basket.getItems()).toContain(candy1);
    })

    it("Should have a total price of 0 on creation", () => {
        basket = new ShoppingBasket();
        expect(basket.getTotal()).toEqual(0);
    })

    it("Should allow the total price to be seen", () => {
        basket = new ShoppingBasket();
        basket.addItem(candy1);
        basket.addItem(candy2);
        expect(basket.getTotal()).toEqual(5.98);
    })
})