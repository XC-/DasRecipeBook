/**
 * Created by xc- on 12.3.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  }
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;