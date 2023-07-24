const { add } = require("../src/add")

describe("add", () => {
    it("should add 2 numbers", () => {
        expect(add(2, 2)).toBe(4);
        expect(add(2, 4)).toBe(6);
        expect(add(100, 100)).toBe(200);
    })
})