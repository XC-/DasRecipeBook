var express = require('express');
var router = express.Router();

var Recipe = require('../schemas/recipe');

/* GET home page. */
router.get('/', function(req, res, next) {
  Recipe
    .find({})
    .exec()
    .then(function(documents) {
      res.json(documents)
    }, function(error) {
      res.status(400).send('Some error')
    });
});

router.post('/', function(req, res, next) {
  var recipe = new Recipe(req.body);
  recipe
    .save()
    .then(function(doc) {
      console.log('Suc', doc);
      res.json(doc);
    }, function(error) {
      console.log('Err', error);
      res.send(error);
    });
});

module.exports = router;
