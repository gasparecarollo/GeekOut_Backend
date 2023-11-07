DROP DATABASE IF EXISTS games_dev; /* he structure of the database. It defines how data is organized and how relationships among data are handled. A schema defines the tables, fields, data types, relationships, and constraints in a database.  */
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
is_favorite BOOLEAN NOT NULL,
genre TEXT DEFAULT NULL,
storyline TEXT DEFAULT NULL,
video_id VARCHAR(12) DEFAULT NULL,
image_id TEXT DEFAULT NULL,
cost INT NOT NULL
); 