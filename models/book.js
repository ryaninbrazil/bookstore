const mongoose = require('mongoose');

// Genre Schema

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
    required: true
  },
  buy_url: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getBooks = function(callback, limit) {
  Books.find(callback).limit(limit);
}

// Get Book

module.exports.getBookById = function(id, callback) {
  Books.findById(id, callback);
}


