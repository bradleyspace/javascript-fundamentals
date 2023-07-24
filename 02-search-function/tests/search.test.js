const { searchCandies } = require("../src/search");

describe("searchCandies", () => {
    it("should return a list of names with given parameters", () => {
        expect(searchCandies("Ma", 5)).toEqual(["Mars", "Maltesers"]);
        expect(searchCandies("s", 2)).toEqual(["Skittles"])
    });
})