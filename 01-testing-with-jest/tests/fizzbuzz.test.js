const { fizzBuzz } = require("../src/fizzbuzz")

describe("fizzbuzz", () => {
    it("should return fizz if % 3, buzz if % 5, fizzbuzz if both", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
        expect(fizzBuzz(10)).toBe("Buzz");
        expect(fizzBuzz(15)).toBe("Fizzbuzz");
        expect(fizzBuzz(8)).toBe(8);
    })
})