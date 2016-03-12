var express = require('express');
var router = express.Router();

var Tag = require('../schemas/tag');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Tag
    .find({})
    .exec()
    .then(function(documents) {
      res.json(documents);
    }, function(error) {
      console.log(error);
      res.status(400).send('Error');
    })
});

router.post('/', function(req, res, next) {
  (new Tag(req.body))
    .save()
    .then(function(doc) {
      console.log('Suc', doc);
      res.json(doc);
    }, function(error) {
      console.log('Err', error);
      res.status(400).send(error);
    });
});

module.exports = router;
