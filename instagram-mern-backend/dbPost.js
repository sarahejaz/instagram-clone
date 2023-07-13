const mongoose = require('mongoose');

const instaPostContent = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  comments: [],
});

const postContent = mongoose.model('Post Content', instaPostContent);

module.exports = postContent;
