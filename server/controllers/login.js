/* eslint-disable camelcase */
const SHA256 = require('crypto-js/sha256');
const moment = require('moment');
const models = require('../models');

module.exports = {
  post(req, res) {
    const { username, password: introPW } = req.body;
    models.login.getUser(username, (result) => {
      const {
        name, lastname, email, password, created_at,
      } = result[0];
      const checkPassword = SHA256(username + introPW + name + lastname + email
        + moment(created_at).format('YYYY/MM/DD')).toString();
      if (checkPassword === password) {
        res.status(200).send('Logged In');
      }
    });
  },
};
