'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, require: true}, // REQUIRED PROPERTY FOR AN ITEM
  calories: { type: Number, require: true},
  type: { type: String, uppercase: true , enum: ['FRUIT', 'VEG', 'MEAT']}
})

// mongoose.model('collection-name', 'your-schema-from-above')
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;