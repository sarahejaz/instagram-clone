import axios from 'axios';
import React from 'react';

const API_URL = 'http://localhost:8080';

class PostService {
  upload = (caption, username, url) => {
    axios.post('/upload', {
      caption: caption,
      user: username,
      image: url,
    });
  };

  getPosts = () => {
    axios.get('/sync').then((response) => {
      return response.data;
    });
  };
}

export default new PostService();
