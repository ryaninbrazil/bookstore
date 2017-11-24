const mongoose = require('mongoose');

// Genre Schema

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres

module.exports.getGenres = function(callback, limit) {
  Genres.find(callback).limit(limit);
}