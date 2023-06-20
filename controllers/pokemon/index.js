const index = require("./indexRoutes")
const newPokemon = require("./new")
const show = require("./show")
const create = require("./create")
const edit = require("./edit")
const update = require("./update")
const destroy = require("./delete.js")

module.exports = {
    index,
    new: newPokemon,
    show,
    create,
    edit, 
    update,
    destroy

}