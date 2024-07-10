// models/Person.js

const mongoose = require('mongoose');

// Define schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  }
});

// Create model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
