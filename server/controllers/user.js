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
    models.user.getBannedUsers((result) => {
      if (result.length !== 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User Not Found');
      }
    });
  },
  putUpdateUserInfo(req, res) {
    /*
      {
        update: 'banned',
        value: true
        userId: id,
      }
    */
    const { update, value, userId } = req.params;
    const data = [value, userId];
    if (update === 'banned') {
      models.user.putUpdateUserBanned(data, (result) => {
        if (result.length !== 0) {
          res.status(204).json(result);
        } else {
          res.status(404).send('User Not Found');
        }
      });
    }
    if (update === 'name') {
      models.user.putUpdateUserName(data, (result) => {
        if (result.length !== 0) {
          res.status(204).json(result);
        } else {
          res.status(404).send('User Not Found');
        }
      });
    }
    if (update === 'profile_picture') {
      models.user.putUpdateUserProfilePicture(data, (result) => {
        if (result.length !== 0) {
          res.status(204).json(result);
        } else {
          res.status(404).send('User Not Found');
        }
      });
    }
    if (update === 'profile_banner') {
      models.user.putUpdateUserBannerPicture(data, (result) => {
        if (result.length !== 0) {
          res.status(204).json(result);
        } else {
          res.status(404).send('User Not Found');
        }
      });
    }
    if (update === 'last_name') {
      models.user.putUpdateUserLastName(data, (result) => {
        if (result.length !== 0) {
          res.status(204).json(result);
        } else {
          res.status(404).send('User Not Found');
        }
      });
    }
    if (update === 'address_user') {
      models.user.putUpdateUserAddress(data, (result) => {
        if (result.length !== 0) {
          res.status(204).json(result);
        } else {
          res.status(404).send('User Not Found');
        }
      });
    }
  },
};
