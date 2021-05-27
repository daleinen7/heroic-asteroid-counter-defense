const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {
    type: String,
    trim: true,
    required: true
  },
  answer: {
    type: String,
  },
  score: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);