const models = require('../models');

module.exports = {
  getAllEvents(req, res) {
    models.events.getAllEvents((result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('No Events Found');
      }
    });
  },
};
