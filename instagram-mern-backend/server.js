const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbPost = require('./dbPost');
const Pusher = require('pusher');

// app config
const app = express();
const port = process.env.PORT || 8080;

const pusher = new Pusher({
  appId: '1334065',
  key: '11cf2ffc4c35a074a46e',
  secret: '884a101aff585dafd6f9',
  cluster: 'ap2',
  useTLS: true,
});

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_string =
  'mongodb+srv://admin:instagrammern@cluster0.ujpbu.mongodb.net/instagramdb?retryWrites=true&w=majority';
mongoose.connect(connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('DB connected');

  const changeStream = mongoose.connection.collection('posts').watch();
  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const postDetails = change.fullDocument;
      pusher.trigger('posts', 'inserted', {
        user: postDetails.user,
        caption: postDetails.caption,
        image: postDetails.image,
      });
    } else {
      console.log('Error triggering Pusher');
    }
  });
});

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/upload', (req, res) => {
  const body = req.body;

  dbPost.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/sync', (req, res) => {
  dbPost.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));

// const cors = require('cors');
// const express = require('express');
// const app = express();
// const initRoutes = require('./routes');

// var corsOptions = {
//   origin: 'http://localhost:8081',
// };

// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);

// let port = 8080;
// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });
