//methods for interacting with DB and formatting data will go here
var db = require('../db');


module.exports = {
  getAllItems: () => {
    return new Promise ((resolve, reject) => {
      let query = `SELECT * FROM items`;
      db.query(query, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });

  },
  getAllPhotos: () => {
    return new Promise ((resolve, reject) => {
      let query = `SELECT * FROM items`;
      db.query(query, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  }
};
