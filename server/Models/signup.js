
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  },
  retypepass: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
});

const user = mongoose.model('signup', userSchema);

module.exports = user;

