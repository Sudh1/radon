const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type :String, 
        required: true
    },
    year:{
        type: Number,
     default:2021
    },


    authorName: String, 
    totalPages: Number,
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europeianPrice: String
    },
    stockAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
