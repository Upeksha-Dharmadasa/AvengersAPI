const mongoose = require ('mongoose') // Import mongoose package

// Create avengers schema
const avengerSchema = new mongoose.Schema 
({

    name:
    {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    },

    birthname: String,

    movies:
    { 
        type:[String],
        enum: ["Infinity War", "End Game", "Iron man 1", "Black Widow", "Thor", "The Winter Soldier "],
        required: true
    },

    likeCount: Number,

    imageUrl:
    {
        type: String,
        default: "Some default URL"
    },

    deceased: Boolean,

});

const Avenger = mongoose.model("Avenger" , avengerSchema); // Create a model for the schema. Blueprint 
module.exports = Avenger; // Export the model