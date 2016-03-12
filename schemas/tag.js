/**
 * Created by xc- on 12.3.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  }
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
