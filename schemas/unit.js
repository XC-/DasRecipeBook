/**
 * Created by xc- on 12.3.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var unitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name_hr: {
    type: String,
    required: true
  }
});

var Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
