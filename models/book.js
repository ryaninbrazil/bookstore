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

// Add Books
module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
}

// Update Books
module.exports.updateBook= function(id, book, options, callback) {
  let query = {_id: id};
  let update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages,
    image_url: book.image_url,
    buy_url: book.buy_url

  };
  Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Books
module.exports.removeBook = function(id, callback) {
  let query = {_id: id};
  Book.remove(query, callback);
}