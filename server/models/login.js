const db = require('../../db');

module.exports = {
  getUser(username, callback) {
    const queryString = 'SELECT password, name, lastname, email, created_at FROM user WHERE username = ?';
    db.connection.query(queryString, [username], (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
};
