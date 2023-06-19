const mongoose = require("./connection")
const {Schema, model}= mongoose

// create a schema, defines that shapes of an object

const pokemonSchema = new Schema({
    name: String,
    img: String,
    type:Array,
    stats: Object
})

// Create a model using the Schema

const Pokemon = model("Pokemon", pokemonSchema)
console.log(Pokemon);

// export the model
module.exports=Pokemon