var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    name: String,
    info: String
}, {
    timestamps: true
});

// attaching schema to collection
module.exports = mongoose.model('Users', UsersSchema);