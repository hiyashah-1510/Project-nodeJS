const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    actors: {
        type: String,
        required : true
    },
    directors: {
        type: String,
        required: true
    },
    desc: { 
        type: String, 
        required: true 
    },
    category: { 
        type: [String], 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    year: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

module.exports = mongoose.model("Movie", MovieSchema);