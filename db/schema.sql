DROP DATABASE IF EXISTS runashville;

CREATE DATABASE runashville;

USE runashville;

CREATE TABLE user_type (
  id INT AUTO_INCREMENT,
  name_user_type VARCHAR(20),
  description_user_type TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT AUTO_INCREMENT,
  name_user VARCHAR(30),
  last_name VARCHAR(50),
  password_user VARCHAR(100),
  address_user VARCHAR(100),
  email VARCHAR(40),
  fk_user_type_id INT,
  banned BOOLEAN,
  image_url VARCHAR(1000),
  banner_url VARCHAR(1000),
  bio_description TEXT,
  approved BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_user_type_id) REFERENCES user_type(id)
);

CREATE TABLE friends (
  id INT AUTO_INCREMENT,
  fk_source_user_id INT,
  fk_target_user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status_friends BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_source_user_id) REFERENCES user(id),
  FOREIGN KEY (fk_target_user_id) REFERENCES user(id)
);

CREATE TABLE post (
  id INT AUTO_INCREMENT,
  fk_user_id INT,
  image_url VARCHAR(200),
  message_post TEXT,
  reported BOOLEAN,
  show_post BOOLEAN,
  location_post VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_user_id) REFERENCES user(id)
);

CREATE TABLE stats (
  id INT AUTO_INCREMENT,
  fk_post_id INT,
  distance DECIMAL(5,3),
  time_hour INT,
  time_minutes INT,
  time_seconds INT,
  pace INT,
  heart_rate INT,
  steps INT,
  calories_burned DECIMAL (3,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_post_id) REFERENCES post(id)
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT,
  fk_post_id INT,
  fk_user_id INT,
  message_comments TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_post_id) REFERENCES post(id),
  FOREIGN KEY (fk_user_id) REFERENCES user(id)
);

CREATE TABLE reactions (
  id INT AUTO_INCREMENT,
  name_reactions VARCHAR(20),
  description_reactions TEXT,
  icon varchar(200),
  PRIMARY KEY (id)
);

CREATE TABLE reactions_on_post (
  id INT AUTO_INCREMENT,
  fk_post_id INT,
  fk_user_id INT,
  fk_reaction_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_post_id) REFERENCES post(id),
  FOREIGN KEY (fk_user_id) REFERENCES user(id),
  FOREIGN KEY (fk_reaction_id) REFERENCES reactions(id)
);

CREATE TABLE event_type (
  id INT AUTO_INCREMENT,
  name_event_type VARCHAR(50),
  description_event_type TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE difficulty_level (
  id INT AUTO_INCREMENT,
  name_difficulty_level VARCHAR(30),
  description_difficulty_level TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE events (
  id INT AUTO_INCREMENT,
  event_title VARCHAR(40),
  description_events TEXT,
  reported BOOLEAN,
  show_events BOOLEAN,
  fk_event_type_id INT,
  fk_difficulty_level_id INT,
  fk_leader_user_id INT,
  official BOOLEAN,
  start_time DATETIME,
  end_time DATETIME,
  start_location VARCHAR(100),
  end_location VARCHAR(100),
  image_url VARCHAR(200),
  thumbnail_photo VARCHAR(200),
  running_distance DECIMAL(3,2),
  link VARCHAR(200),
  attendees INT,
  promoted BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_event_type_id) REFERENCES event_type(id),
  FOREIGN KEY (fk_difficulty_level_id) REFERENCES difficulty_level(id),
  FOREIGN KEY (fk_leader_user_id) REFERENCES user(id)
);

CREATE TABLE user_type_for_event_type (
  id INT AUTO_INCREMENT,
  fk_event_type_id INT,
  fk_user_type_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_event_type_id) REFERENCES event_type(id),
  FOREIGN KEY (fk_user_type_id) REFERENCES user_type(id)
);

INSERT INTO user_type (name_user_type, description_user_type) VALUES ('Community Member', 'Just a regular user on the platform');

/* Insert new users in USER table */

INSERT INTO user (name_user, last_name, password_user, address_user, email, fk_user_type_id, banned, image_url, banner_url, bio_description) VALUES ('Jodi', 'Silverman', '497daa66aebfefcccd1f3c46dcd59d64210b31ebb41b7a17acdfd4dc4cff367b', '21 Jump Street', 'jodi@21Jump.com', 1, false, 'https://media-exp1.licdn.com/dms/image/C4D03AQGb2LV3vUqt6Q/profile-displayphoto-shrink_800_800/0/1616525518088?e=1623283200&v=beta&t=_HOXvWSGo6RP4IumxWAyUCYiTU7c3SMo5geGN2sqbNs', 'https://media-exp1.licdn.com/dms/image/C4E1BAQGNSXOpPD26mg/company-background_10000/0/1575402796522?e=1617915600&v=beta&t=Xb1fHhsUGHAqLGzJo7w_eWf0UATzIrrseB9UUGFI3q0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO user (name_user, last_name, password_user, address_user, email, fk_user_type_id, banned, image_url, banner_url, bio_description) VALUES ('Daniel', 'Doyle', '497daa66aebfefcccd1f3c46dcd59d64210b31ebb41b7a17acdfd4dc4cff367b', '21 Jump Street', 'daniel@21Jump.com', 1, false, 'https://media-exp1.licdn.com/dms/image/C4E03AQGFmWXduIV_Iw/profile-displayphoto-shrink_800_800/0/1533059495913?e=1623283200&v=beta&t=PnT8-NVJhqO6kl5rERys8mEb2mS1q_8BuaNF-kq7ovQ', 'https://media-exp1.licdn.com/dms/image/C5616AQEOKvd6zJjtlg/profile-displaybackgroundimage-shrink_200_800/0/1600785720704?e=1623283200&v=beta&t=Ndkcc-NglerNTm15iR8F3g8_a297MnPwhtZi8D1XY6k', 'This is my profile! It is a test, so no judgment please.');
INSERT INTO user (name_user, last_name, password_user, address_user, email, fk_user_type_id, banned, image_url, banner_url, bio_description) VALUES ('Phil', 'Teves', '497daa66aebfefcccd1f3c46dcd59d64210b31ebb41b7a17acdfd4dc4cff367b', '21 Jump Street', 'phil@21Jump.com', 1, false, 'https://media-exp1.licdn.com/dms/image/C4E03AQE_LoUV3hoUGg/profile-displayphoto-shrink_800_800/0/1616439062777?e=1623283200&v=beta&t=imxyU2JdwSm2rFNAYSXCts9H2_srazLN_3s0XjUhWhQ', 'https://www.tbf.org/-/media/tbf/images/funds/boston-skyline-dusk-covid-banner.jpg?h=516&w=1290&la=en&hash=31E68F53D6A5A8934BFD2984CD91189014C7E801', 'You from Boston? I suppose you think you''re better than me?');

/* CREATE FRIENDS LISTS */
INSERT INTO friends (fk_source_user_id, fk_target_user_id, status_friends) VALUES (1, 2, true);
INSERT INTO friends (fk_source_user_id, fk_target_user_id, status_friends) VALUES (1, 3, true);
INSERT INTO friends (fk_source_user_id, fk_target_user_id, status_friends) VALUES (2, 3, true);

INSERT INTO post (fk_user_id, image_url, message_post, reported, show_post, location_post) VALUES (1, 'https://simplifaster.com/wp-content/uploads/2017/01/Seaside-Runner.jpg','I am such a fast runner, look how fast I can go wheeeee', false, true, 'Nashville');

INSERT INTO post (fk_user_id, image_url, message_post, reported, show_post, location_post) VALUES (1, null,'Gotta go fast', false, true, 'Shelby Bottom');

INSERT INTO comments (fk_post_id, fk_user_id, message_comments) VALUES (1, 1, 'cool story bro');
INSERT INTO comments (fk_post_id, fk_user_id, message_comments) VALUES (1, 2, 'WOWOW');

INSERT INTO stats (fk_post_id, distance, time_hour, time_minutes, time_seconds, pace, heart_rate, steps, calories_burned) VALUES (2, 5.12, 1, 30, 15, 7.30, 120, 5151, 5.12);

/* MOCK EMAIL: Jodi@21Jump.com
  MOCK PASSWORD: Jodi
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/
