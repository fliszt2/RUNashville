const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD
  password: config.mysqlPassword,
=======
  password: 'ballade2',
>>>>>>> f57b7c44a769dc37aecaac248856623dba9d8ca8
  database: 'runashville',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

module.exports = { connection };
