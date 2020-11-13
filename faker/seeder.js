const faker = require('faker');
const mysql = require('mysql');
const db = require('../server/db/index.js');


let randomItems = [];
let randomImages = [];

//populates arrays with random objs
for (let i = 0; i < 100; i++) {
  let itemObj = {
    id: i,
    itemNum: faker.random.number(),
    POSNum: faker.random.number(),
    avgScore: faker.random.number(5),
    reviewCount: faker.random.number(100),
    title: faker.random.word()
    //send help
  }
  randomItems.push(itemObj);
  let imageObj = {
    id: i,
    itemID: itemObj.itemNum,
    photoDescription: faker.random.word(),
    srcURL: faker.image.imageUrl()
  }
  randomImages.push(imageObj);
}

//adds random items to items table
for (let i = 0; i < randomItems.length -1; i++) {
  let current = randomItems[i];
  // console.log(current)
  let itemNum = current.itemNum;
  let POSNum = current.POSNum;
  let avgScore = current.avgScore;
  let reviewCount = current.reviewCount;
  let title = current.title;

  let query = `INSERT INTO items (itemNum, POSNum, avgScore, reviewCount, title) VALUES ('${itemNum}', '${POSNum}', '${avgScore}', '${reviewCount}', '${title}')`
  // console.log(query);
  db.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(res);
      console.log('new entry logged in db table items', i + 1);
    }
  })
}


for (let i = 0; i < randomImages.length; i++) {
  let current = randomImages[i];
  console.log(current)
  let itemID = current.id;
  let photoDescription = current.photoDescription;
  let srcURL = current.srcURL;
  let query = `INSERT INTO photos (photoDescription, srcURL) VALUES ('${photoDescription}', '${srcURL}')`

  // console.log(query);
  db.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(res);
      console.log('new entry logged in db table images', i + 1);
    }
  })



}


// console.log('randomItems:', randomItems.length);
// console.log('randomImages:', randomImages.length);

db.end();

