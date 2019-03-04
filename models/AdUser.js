// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUser = new Schema({
  user_nick: {
    type: String
  },
  user_pass: {
    type: String
  }
},{
    collection: 'adusers'
});

module.exports = mongoose.model('AdUser', AdUser);