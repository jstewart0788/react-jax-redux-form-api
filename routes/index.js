var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = require('../models/game');

mongoose.connect('mongodb://localhost/react-jax');

router.post('/game', function(req, res) {
  var game = new Game(req.body.data);
  game.save(function(err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  });
});

router.get('/game/all', function(req, res) {
  Game.find({}, function(err, data){
    if(err)
      res.send(err);
    else
      res.json(data);
  });
});

router.get('/game', function(req, res) {
  Game.findOne({_id: req.query.id}, function(err, data){
    if(err)
      res.send(err);
    else
      res.json(data);
  });
});


module.exports = router;
