const mysql = require('mysql');
// const config = require('../config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ballade2',
  database: 'runashville',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

module.exports = { connection };
