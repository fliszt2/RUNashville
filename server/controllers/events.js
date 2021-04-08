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
  getAllPromotedEvents(req, res) {
    models.events.getAllPromotedEvents((result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('No Events Found');
      }
    });
  },
  getHiddenEvents(req, res) {
    models.events.getHiddenEvents((result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('No Events Found');
      }
    });
  },
  getEventsCreatedByUser(req, res) {
    const { id } = req.params;
    models.events.getEventsCreatedByUser(id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('No Events Found');
      }
    });
  },
};
