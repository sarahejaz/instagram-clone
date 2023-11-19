module.exports = {
  connection_string:
    ${{ secrets.MONGODB_URI }},
  database: 'instagramdb',
  imgBucket: 'photos',
};
