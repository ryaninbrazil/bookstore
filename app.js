const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());


Genres = require('./models/genre'); 
Books = require('./models/book'); 
// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore', {
  useMongoClient: true,
});
const db = mongoose.connection;

app.get('/', function(req, res) {
  res.send("Please use /api/books or /api/genre");
});

app.get('/api/genres', function(req, res) {
  Genres.getGenres(function(err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

app.post('/api/genres', function(req, res) {
  let genre = req.body;
  Genres.addGenre(genre, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

app.put('/api/genres/:_id', function(req, res) {
  let id = req.params._id;
  let genre = req.body;
  Genres.updateGenre(id, genre, {}, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});


app.delete('/api/genres/:_id', function(req, res) {
  let id = req.params._id;
  Genres.removeGenre(id, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

//*******************************************************************//

app.get('/api/books', function(req, res) {
  Books.getBooks(function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get('/api/books/:_id', function(req, res) {
  Books.getBookById(req.params._id, function(err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.post('/api/books', function(req, res) {
  let book = req.body;
  Books.addBook(book, function(err, book) {
    if (err) {
      throw err;
    }
    res.json(book); 
  });
});

app.put('/api/books/:_id', function(req, res) {
  let id = req.params._id;
  let book = req.body;
  Books.updateBook(id, book, {}, function(err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.delete('/api/books/:_id', function(req, res) {
  let id = req.params._id;
  Books.removeBook(id, function(err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.listen(3000);
console.log("Running on port 3000!");