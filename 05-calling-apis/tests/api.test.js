const { fetchPokemon } = require("../src/api");



describe("fetchPokemon", () => {
    it("Should return the given pokemon data for 'ditto'", async () => {
        const data = await fetchPokemon("ditto")
        expect(data).toEqual({
            name: "ditto",
            height: 3,
            weight: 40,
            id: 132
        })
    })

    it("Should return the given pokemon data for charizard", async () => {
        const data = await fetchPokemon("charizard");
        expect(data).toEqual({
            name: "charizard",
            height: 17,
            weight: 905,
            id: 6
        });
    })
})