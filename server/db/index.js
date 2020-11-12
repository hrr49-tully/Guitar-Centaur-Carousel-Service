var mysql = require('mysql');

var db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'centaur'
  });

db.connect();
module.exports = db;