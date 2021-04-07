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
  image_url VARCHAR(200),
  banner_url VARCHAR(200),
  bio_description TEXT,
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
INSERT INTO user (name_user, last_name, password_user, address_user, email, fk_user_type_id, banned, created_at) VALUES ('Jodi', 'Jodi', '497daa66aebfefcccd1f3c46dcd59d64210b31ebb41b7a17acdfd4dc4cff367b', '21 Jump Street', 'jodi@21Jump.com', 1, false, '2021-04-05');

/* MOCK EMAIL: Jodi@21Jump.com
  MOCK PASSWORD: Jodi
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < db/schema.sql
 *  to create the database and the tables.*/
