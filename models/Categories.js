let mongoose = require('mongoose');
var Posts = require('./Posts');

let CategoriesSchema = mongoose.Schema({
    title: String,
    info: String
});

module.exports = mongoose.model('Categories', CategoriesSchema);