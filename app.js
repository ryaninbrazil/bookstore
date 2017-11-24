const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Genres = require('./models/genre'); 
Books = require('./models/book'); 
// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore', {
  useMongoClient: true,
});
const db = mongoose.connection;

app.get('/', function(req, res) {
  res.send("Please use /a1111pi/books or /api/genre");
});

app.get('/api/genres', function(req, res) {
  Genres.getGenres(function(err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

app.get('/api/book', function(req, res) {
  Book.getbooks(function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.listen(3000);
console.log("Running on port 3000!");