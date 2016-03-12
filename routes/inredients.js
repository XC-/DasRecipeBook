/**
 * Created by xc- on 12.3.2016.
 */

var express = require('express');
var router = express.Router();

var Ingredients = require('../schemas/ingredient');

router.get('/', function(req, res, next) {
  Ingredients
    .find({})
    .exec()
    .then(function(documents) {
      res.json(documents);
    }, function(error) {
      console.log(error);
      res.status(400).send("Error")
    })
});

router.post('/', function(req, res, next) {
  (new Tag(req.body))
    .save()
    .then(function(doc) {
      console.log('Suc');
      res.json(doc);
    }, function(error) {
      console.log('Err', error);
      res.status(400).send(error)
    });
});

module.exports = router;