var mysql = require('mysql');

const host  = 'localhost';
const port  = 3000;
const url   = `http://${host}:${port}`;



var db = mysql.createConnection({
    host: host,
    user: 'student',
    password: 'password',
    database: 'centaur'
  });

db.connect();
module.exports = db;