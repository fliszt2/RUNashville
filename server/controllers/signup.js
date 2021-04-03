/* eslint-disable camelcase */
const SHA256 = require('crypto-js/sha256');
const models = require('../models');

module.exports = {
  post(req, res) {
    const {
      username, password, name, lastname, email, created_at,
    } = req.body;
    const hashedPW = SHA256(username + password + name + lastname + email
      + created_at).toString();
    models.signup.newUser([username, hashedPW, name, lastname, email, created_at], () => {
      res.status(201).send('Created');
    });
  },
};
