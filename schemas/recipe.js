/**
 * Created by xc- on 12.3.2016.
 */
var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ingredient = require('./ingredient');
var Tag = require('./tag');

var ingredientEntry = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  }
});

var recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: false
  },
  ingredients: {
    type: [ingredientEntry],
    required: false
  },
  tags: {
    type: [String],
    required: true
  },
  guide: {
    type: String,
    required: true
  }
});

recipeSchema.post('save', function(document) {
  _(document.tags)
    .map(function(tag) {
      return {name: tag};
    })
    .forEach(function(item) {
      (new Tag(item))
        .save()
        .then(function(doc) {
          console.log('Saved: ', doc);
        }, function(error) {
          console.log(error);
        })
    });
  _(document.ingredients)
    .map(function(ingredient) {
      return {name: ingredient.name};
    })
    .forEach(function(item) {
      (new Ingredient(item))
        .save()
        .then(function(doc) {
          console.log('Saved: ', doc)
        }, function(error) {
          console.log(error);
        })
    })
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
