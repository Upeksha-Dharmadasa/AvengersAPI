const mongoose = require ('mongoose')

const avengerSchema = new mongoose.Schema 
({

    name: String,
    birthname: String,
    movies: String,
    likeCount: Number,
    deceased: Boolean,

});