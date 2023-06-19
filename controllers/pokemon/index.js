const index = require("./indexRoutes")
const newPokemon = require("./new")
const show = require("./show")
module.exports = {
    index,
    new: newPokemon,
    show
}