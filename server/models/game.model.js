const mongoose = require('mongoose');

//CREATE OUR SCHEMA
//Create a model and schema to shape/structure our document and connect with specific collection in db

//Our schema defines the structure of the document, default values and validators
const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A game's name is required"],
        minlength: [3, "Game's name should be at least 3 characters"]
    },
    yearReleased: {
        type: Number,
        required: [true, "A game's year released is required"],
        min: [1950, "A game's year cannot be before 1950"]
    },
    genre: {
        type: String,
        required: [true, "Game's genre is required"],
        enum: [
            "RPG",
            "Strategy",
            "FPS",
            "Platform",
            "Casual",
            "Survival",
            "Action",
            "Puzzle",
            "Sports",
            "Kids"
        ]
    },
    image: {
        type: String,
        required: [true, "We need a picture"],
    },
    rating: {
        type: String,
        enum: [
            "T",
            "M",
            "MA",
            "O",
            "AO",
            "No rated yet"
        ]
    },
    company: {
        type: String
    }
}, {timestamps: true});

//THE MODEL IS A COMBINATION OF THESE:
//1- COLLECTION NAME WHICH WILL BE A SINGULAR, CAPITALIZED VERSION OF THE COLLECTION NAME, THAT'S HELD IN THE DB, IT WILL SHOW IN OUR DB AS "games"
//2- THE SCHEMA
const Game = mongoose.model('Game', GameSchema);

//Mongoose MODEL PROVIDES AN INTERFACE TO THE DB FOR CREATING, QUERYING, UPDATING, DELETING RECORDS, ETC

//WE EXPORT THE MODEL TO BE IMPORTED AND USED IN OUR CONTROLLER. WE WILL WRITE Games.find({}) FOR EXAMPLE
module.exports = Game;
