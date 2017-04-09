var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var Game = new Schema({
  game: String,
  email: String,
  lead: String,
  currentPlayers: Number,
  playersNeeded: Number,
  description: String,
  playerQueries:[{
    name: String,
    email: String,
    comment: String
  }]
});

module.exports = mongoose.model('Game', Game);
