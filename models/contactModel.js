const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add name'],
  },
  phonenumber: {
    type: Number,
    trim: true,
    required: [true, 'Please add phone number'],
  },
  information: {
    type: String,
    trims: true,
    required: false,
  },
  group: {
    type: String,
    trim: true,
    required: [true, 'select group'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
