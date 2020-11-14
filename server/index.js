const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/index.js');
const model = require('./db/model.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.use(express.static('../public'));
app.use(express.static(__dirname + '/../public'));

app.get('/items', async (req, res) => {
  let items = await model.getAllItems()
  console.log(items);
  res.end(JSON.stringify(items));
});

app.listen(port, () => {
  console.log(`The Guitar Centaur rocks out to http://localhost:${port}`)
});