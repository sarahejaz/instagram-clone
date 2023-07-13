import { useEffect, useState } from 'react';
import './App.css';
import Post from './Components/Post/Post';
//import Pusher from 'pusher-js';
import PostService from './Service/post.service';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Upload from './Components/Upload/Upload';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'username1',
      caption: 'using react!',
      imageUrl:
        'https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png',
    },
    {
      username: 'username1',
      caption: 'using react!',
      imageUrl:
        'https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png',
    },
  ]);

  const [upload, setUpload] = useState(false);
  const handleOpen = () => setUpload(true);
  const handleClose = () => setUpload(false);

  // useEffect(() => {
  //   setPosts(PostService.getPosts());
  // }, []);

  // useEffect(() => {
  //   const pusher = new Pusher('fec9ac8009413c4c0ce9', {
  //     cluster: 'ap2',
  //   });

  //   const channel = pusher.subscribe('posts');
  //   channel.bind('inserted', (newPost) => {
  //     console.log(newPost);
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [posts]);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="images/instagram-logo.png"
          alt="Instagram"
        />
      </div>

      {/* Add post */}
      <div>
        <Button onClick={handleOpen}>New Post</Button>
        <Modal
          open={upload}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Upload />
        </Modal>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      <Post
        username="username1"
        caption="using react!"
        imageUrl="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post username="username2" caption="instagram clone" />
      <Post username="username3" caption="project" />
    </div>
  );
}

export default App;
