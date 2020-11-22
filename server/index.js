const express = require('express');
const app = express();
const port = 3001;
const db = require('./db/index.js');
const model = require('./db/model.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// app.use(express.static('../public'));
app.use(express.static(__dirname + '/../public'));

app.get('/api/items', async (req, res) => {
  let items = await model.getAllItems()
  items = model.formatItemData(items);
  // console.log(items);
  res.end(JSON.stringify(items));
});

//endpoint to get photos by item id

app.post('/api/photos', async (req, res) => {
  let itemID = req.body.itemID;
  let photos = await model.getPhotosByItemID(itemID);
  photos = model.formatPhotoData(photos);
  res.end(JSON.stringify(photos));
})

app.listen(port, () => {
  console.log(`The Guitar Centaur rocks out to http://localhost:${port}`)
});