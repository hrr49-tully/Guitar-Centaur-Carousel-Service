var mysql = require('mysql');

const host  = 'localhost';
const port  = 3001;
const url   = `http://${host}:${port}`;



var db = mysql.createConnection({
  host: host,
  user: 'root',
  password: '',
  database: 'centaur'
});

db.connect();
module.exports = db;