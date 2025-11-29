const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      trim: true
    },
    isbn: {
      type: String,
      trim: true
    },
    description: {
      type: String
    },
    publishedDate: {
      type: Date
    },
    copies: {
      type: Number,
      default: 1
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
