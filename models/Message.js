const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  email: String,
  msg: String,
}, {collection:'hardware'});

module.exports = mongoose.model('Message', MessageSchema);