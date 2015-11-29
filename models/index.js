'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('Survey', require('./Survey'));

mongoose.connect("mongodb://localhost/survey-project");

module.exports = mongoose;
