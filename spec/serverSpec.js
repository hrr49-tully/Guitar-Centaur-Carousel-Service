
const mysql = require('mysql');
const expect = require('chai').expect;

describe('Database Items Table', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'centaur'
    });
    dbConnection.connect();
    // var tablename = 'items';
    // dbConnection.query('truncate ' + tablename, done);
    done();
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should handle item insertion', function(done) {
    let query = `INSERT INTO items (itemNum, POSNum, avgScore, reviewCount, title) VALUES ( '1', '2', '3', '4', 'Sweet Ibanez Axe')`

    dbConnection.query(query, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(res);
        expect(res.affectedRows).to.equal(1);
      }
      done();
    });
  });

  it('Should handle item retrieval', function (done) {
    let query = `INSERT INTO items (itemNum, POSNum, avgScore, reviewCount, title) VALUES ( '1', '2', '3', '4', 'Sweet Ibanez Axe')`

    dbConnection.query(query, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(res);
        let newQuery = `SELECT * FROM items`
        dbConnection.query(newQuery, (err, res) => {
          if (err) {
            console.log(err)
          } else {
            // console.log(res);
            expect(res.length).to.not.equal(0);
          }
          done();
        })
      }
    });
  })

  it('Should retrieve photos by item ID')

});