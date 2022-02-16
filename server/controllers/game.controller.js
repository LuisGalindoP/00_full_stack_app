const Game = require("../models/game.model");

//WE ARE EXPORTING AN OBJECT OF KEY VALUE PAIRS. THE KEY BEING HOW WE ARE REFERRING TO OUR CALLS
//AND THE CALL ITSELF (ARROW FUNCTION), BEING THE VALUE, WE CAN EASILY ACCESS THESE IN THE game.routes.js

module.exports = {
    //Use the model to connect to the collection and find/return all the documents from our games collection
    findAllGames: (req, res) => {
        Game.find()
            .then((allGames) => {
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=> {
                console.log(`Error in Game.find ${err}`)
                res.json({message: "Something went wrong in Game.find", error: err})
            })
    },
    //Create a new game
    createNewGame: (req, res) => {
        Game.create(req.body)
            .then((newGame)=> {
                console.log(newGame);
                res.json(newGame);
            })
            .catch((err)=>{
                console.log(`Error in Game.create ${err}`);
                //We set a response status of 400 to display our err, which is the rehection of our promise.
                //A 400 status means our client is talking to our server just fine, but the client is not sending good info
                //A 404 status means you are not calling to the right place or your server is not setup properly
                //This is how we will eventually display our validations from the server into react
                //On the flip side a status of 200 means we are looking good
                res.status(400).json(err);

            })
    },
    //Find One Game
    findOneGame: (req, res) => {
        Game.findOne({_id: req.params.id})
            .then((oneGame)=> {
                console.log(oneGame);
                res.json(oneGame);
            })
            .catch((err)=>{
                console.log(`Error in Game.findOne ${err}`);
                res.json({message: "Error in Game.findOne", error: err});
            })
    },
    //Delete One
    deleteOneGame: (req, res) => {
        Game.deleteOne({_id: req.params.id})
            .then((deleteOne)=> {
            console.log(deleteOne);
            res.json(deleteOne);
        })
            .catch((err)=>{
                console.log(`Error in Game.deleteOne ${err}`);
                res.json({message: "Error in deleteOne", error: err});
            })
    },
    //Update Game
    updateGame: (req, res) => {
        Game.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedGame)=> {
                console.log(updatedGame);
                res.json(updatedGame);
            })
            .catch((err)=> {
                res.status(400).json(err);
                console.log(`Error in Game.findOneAndUpdate ${err}`);
                res.json({message: `Error in Game.findOneAndUpdate`, error: err});
            })
    }
}

