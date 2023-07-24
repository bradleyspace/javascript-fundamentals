const { Candy } = require("../src/candy");

describe("Candy", () => {
    it("Should instantiate", () => {
        const candy = new Candy("Mars", 4.99)
        expect(candy.getName()).toEqual("Mars");
        expect(candy.getPrice()).toEqual(4.99);
    })
})