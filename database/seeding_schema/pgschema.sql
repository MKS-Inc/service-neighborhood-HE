CREATE DATABASE neighborhood_component;

\c neighborhood_component;

CREATE TABLE neighborhoods_table(
  hood_id SERIAL PRIMARY KEY,
  hood_name VARCHAR (20) NOT NULL,
  transit_score INTEGER NOT NULL,
  walk_score INTEGER NOT NULL,
  value_past INTEGER NOT NULL,
  value_future INTEGER NOT NULL,
  median_value INTEGER NOT NULL
);
 
CREATE TABLE houses_table(
  house_id SERIAL PRIMARY KEY,
  hood_id INTEGER REFERENCES neighborhoods_table(hood_id) ON UPDATE CASCADE ON DELETE CASCADE,
  home_cost INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  street_address VARCHAR (30) NOT NULL,
  city VARCHAR(25),
  state VARCHAR(13),
  zipcode INTEGER,
  square_feet INTEGER,
  house_img VARCHAR (8)
);

CREATE TABLE users_table(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(15)
);

CREATE TABLE user_houses_table(
  user_id INTEGER REFERENCES users_table(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
  house INTEGER REFERENCES houses_table(house_id) ON UPDATE CASCADE ON DELETE CASCADE
);