DROP DATABASE IF EXISTS runashville;

CREATE DATABASE runashville;

USE runashville;

CREATE TABLE user (
  id INT AUTO_INCREMENT,
  username VARCHAR(20),
  name VARCHAR(30),
  lastName VARCHAR(40),
  password VARCHAR(100),
  email VARCHAR(30),
  created_at DATE,
  PRIMARY KEY (id)
);

INSERT INTO user (username, name, lastname, password, email, created_at) VALUES ('Jodi', 'Jodi', 'Jodi', '67eb8695094491a291bfe0d016e639dfc3475c3f80a59931c97246677aaeb711', 'Jodi', '2021-04-03');

/* MOCK USERNAME: Jodi
  MOCK PASSWORD: Jodi
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < db/schema.sql
 *  to create the database and the tables.*/
