const db = require('../../db');

module.exports = {
  newUser(userData, callback) {
    const queryString = 'INSERT INTO user (username, password, name, lastname, email, created_at) VALUES (?, ?, ?, ?, ?, ?)';
    db.connection.query(queryString, userData, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
};
