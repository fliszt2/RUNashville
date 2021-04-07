const models = require('../models');

module.exports = {
  getDetails(req, res) {
    models.user.getUserDetails(req.params.id, (result) => {
      if (result.length !== 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User Not Found');
      }
    });
  },
  getFriends(req, res) {
    models.user.getUserFriends(req.params.uid, (result) => {
      if (result.length !== 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User Not Found');
      }
    });
  },
  getAll(req, res) {
    models.user.getAllUsers((result) => {
      if (result.length !== 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User Not Found');
      }
    });
  },
  getType(req, res) {
    models.user.getUserType(req.params.id, (result) => {
      if (result.length !== 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User Not Found');
      }
    });
  },
  getBannedUsers(req, res) {
    models.user.getUsersBanned((result) => {
      if (result.length !== 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User Not Found');
      }
    });
  },
};
