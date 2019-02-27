var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    name: String,
    info: String
});

// attaching schema to collection
module.exports = mongoose.model('Users', UsersSchema);