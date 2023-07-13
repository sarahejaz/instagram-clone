import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import './Post.css';

export default function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* Header - contains username and avatar */}
      <div className="post__header">
        <Avatar className="post__avatar" alt="username" />
        <h3>{username}</h3>
      </div>
      {/* Photo */}
      <img className="post__image" src={imageUrl} alt="React" />

      {/* Like, comment, share, save bar */}

      {/* Liked by */}

      {/* Username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}
