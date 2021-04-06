DROP DATABASE IF EXISTS runashville;

CREATE DATABASE runashville;

USE runashville;

CREATE TABLE user_type (
  id INT AUTO_INCREMENT,
  name VARCHAR(20),
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  last_name VARCHAR(50),
  password VARCHAR(100),
  address VARCHAR(100),
  email VARCHAR(40),
  fk_user_type_id INT,
  banned BOOLEAN,
  image_url VARCHAR(200),
  created_at TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_user_type_id) REFERENCES user_type(id)
);

CREATE TABLE friends (
  id INT AUTO_INCREMENT,
  fk_source_user_id INT,
  fk_target_user_id INT,
  created_at TIMESTAMP,
  status BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_source_user_id) REFERENCES user(id),
  FOREIGN KEY (fk_target_user_id) REFERENCES user(id)
);

CREATE TABLE post (
  id INT AUTO_INCREMENT,
  fk_user_id INT,
  image_url VARCHAR(200),
  message TEXT,
  reported BOOLEAN,
  created_at TIMESTAMP,
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
  created_at TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_post_id) REFERENCES post(id)
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT,
  fk_post_id INT,
  fk_user_id INT,
  message TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_post_id) REFERENCES post(id),
  FOREIGN KEY (fk_user_id) REFERENCES user(id)
);

CREATE TABLE reactions (
  id INT AUTO_INCREMENT,
  name VARCHAR(20),
  description TEXT,
  icon varchar(200),
  PRIMARY KEY (id)
);

CREATE TABLE reactions_on_post (
  id INT AUTO_INCREMENT,
  fk_post_id INT,
  fk_user_id INT,
  fk_reaction_id INT,
  created_at TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (fk_post_id) REFERENCES post(id),
  FOREIGN KEY (fk_user_id) REFERENCES user(id),
  FOREIGN KEY (fk_reaction_id) REFERENCES reactions(id)
);

CREATE TABLE event_type (
  id INT AUTO_INCREMENT,
  name VARCHAR(50),
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE difficulty_level (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE events (
  id INT AUTO_INCREMENT,
  fk_event_type_id INT,
  fk_difficulty_level_id INT,
  fk_leader_user_id INT,
  name TEXT,
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
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
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

INSERT INTO user_type (name, description) VALUES ('Community Member', 'Just a regular user on the platform');
INSERT INTO user (name, last_name, password, address, email, fk_user_type_id, banned, created_at) VALUES ('Jodi', 'Jodi', '497daa66aebfefcccd1f3c46dcd59d64210b31ebb41b7a17acdfd4dc4cff367b', '21 Jump Street', 'jodi@21Jump.com', 1, false, '2021-04-05');

INSERT INTO user_type (name, description) VALUES ('Community Admin', 'Able to create official events and remove users/user posts');
INSERT INTO user_type (name, description) VALUES ('Super Admin', 'Able to create official events and remove users/user posts');

INSERT INTO user (name, last_name, password, address, email, fk_user_type_id, banned, created_at) VALUES ('Jack', 'McClain', 'password', 'Nashville', 'jack@nashville.com', 3, false, '2021-04-05');
/* name VARCHAR(30), last_name VARCHAR(50), password VARCHAR(100), address VARCHAR(100), email VARCHAR(40), fk_user_type_id INT, banned BOOLEAN, image_url VARCHAR(200), created_at TIMESTAMP, FOREIGN KEY (fk_user_type_id) REFERENCES user_type(id) */

INSERT INTO event_type (name, description) VALUES ('race', 'The big race');
INSERT INTO event_type (name, description) VALUES ('daily_run', 'Just a daily run');
INSERT INTO event_type (name, description) VALUES ('other', 'This could be a volunteer event or something else');

INSERT INTO difficulty_level (name, description) VALUES ('beginner', 'You know, kid stuff');
INSERT INTO difficulty_level (name, description) VALUES ('intermediate', 'No pain, no gain');
INSERT INTO difficulty_level (name, description) VALUES ('advanced', 'Now we are talking');

-- INSERT INTO events (fk_event_type_id, fk_difficulty_level_id, fk_leader_user_id, name, official, start_time, end_time, start_location, end_location, running-distance, link, attendees, promoted, created_at, updated_at) VALUES (1, 3, 2, 'Hilltop Half-Marathon', true, '2021-04-25T08:30:00', '2021-04-25T10:30:00', 'The Hill Top at West 25th St', 'The Hill Top at West 25th St', 8.5, 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/', 150, true, '2021-04-06T21:19:22.520Z', '2021-04-06T21:19:22.520Z');

/* MOCK EMAIL: Jodi@21Jump.com
  MOCK PASSWORD: Jodi
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < db/schema.sql
 *  to create the database and the tables.*/
