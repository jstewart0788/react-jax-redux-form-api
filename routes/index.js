var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = require('../models/game');

mongoose.connect('mongodb://localhost/react-jax');

router.post('/game', function(req, res) {
  console.log(req.body)
  var game = new Game(req.body);
  game.save(function(err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  });
});

router.get('/game', function(req, res) {
  Game.find({}, function(err, data){
    if(err)
      res.send(err);
    else
      res.json(data);
  });
});

router.get('/game/:id', function(req, res) {
  Game.findById(req.params.id, function(err, data){
    if(err)
      res.send(err);
    else
      res.json(data);
  });
});


module.exports = router;
