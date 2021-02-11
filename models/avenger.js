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
        enum: ["Infinity War", "End Game", "Iron man 1", "Black Widow", "Thor", "The Winter Soldier"],
        required: true
    },

    likeCount: Number,

    imageUrl:
   {
        type: String,
        default: "https://static.wikia.nocookie.net/disney/images/4/4a/Thor_Odinson_TDW_poster_textless.jpg/revision/latest?cb=20130615173905"
        //"https://i.pinimg.com/originals/d9/a0/dc/d9a0dc5d4ae0533582d36062d904607b.jpg"
        //"https://i.pinimg.com/originals/ea/23/7e/ea237ec1ed1bef9fceaa3db8b4e17b5f.jpg"
    },
    
    deceased: Boolean,

});

const Avenger = mongoose.model("Avenger" , avengerSchema); // Create a model for the schema. Blueprint 
module.exports = Avenger; // Export the model