const fetch = require("node-fetch");

const fetchPokemon = async (pokemonName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const { height, id, name, weight} = await res.json()
    return {
        height, id, name, weight
    }
}

module.exports = {
    fetchPokemon
}