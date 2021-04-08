const db = require('../../db');

module.exports = {
  getAllEvents(callback) {
    const queryString = 'SELECT e.id, e.event_title, et.name_event_type, e.official, dl.name_difficulty_level, e.description_events, e.start_time, e.end_time, e.start_location, e.end_location, e.image_url, e.thumbnail_photo, e.running_distance, e.link, e.map_url, e.attendees, e.promoted, e.created_at FROM events AS e LEFT JOIN event_type AS et ON e.event_type_id = et.id LEFT JOIN difficulty_level AS dl ON e.difficulty_level_id = dl.id LEFT JOIN user AS u ON e.leader_user_id = u.id';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
};
