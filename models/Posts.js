 var mongoose = require('mongoose');

let Categories = require('./Categories');
let Users = require('./Users');

var PostsSchema = new mongoose.Schema({
    title: String,
    body: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Category is Required"],
        ref: Categories
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Author is Required"],
        ref: Users
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Posts', PostsSchema);