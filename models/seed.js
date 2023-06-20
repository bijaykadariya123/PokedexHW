const Pokemon = require("./pokemon")
const mongoose = require("./connection")
const pokemons = require('./seedData')

async function seed(){
    // what you want to do it here
    await Pokemon.deleteMany({})
const createdPokemon = await Pokemon.create(pokemons)
// console.log(createdPokemon.length)
// console.log(createdPokemon[0]);    
}


// run the seed function when the database connect
mongoose.connection.on("open", ()=>{seed()


})