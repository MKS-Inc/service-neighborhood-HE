CREATE KEYSPACE IF NOT EXISTS neighborhood_houses WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE neighborhood_houses;

CREATE TABLE neighborhoods_houses (
  hood_id int,
  hood_name text,
  transit_score int,
  walk_score int,
  value_past int,
  value_future int,
  median_value int,
  house_id int,
  home_cost int,
  bedrooms int,
  bathrooms int,
  square_feet int,
  street_adr text,
  city text,
  state text,
  zipcode int,
  house_img text,
  PRIMARY KEY (hood_id, house_id)
);

CREATE TABLE users_houses (
  user_id int,
  user_name text,
  hood_id int,
  hood_name text,
  transit_score int,
  walk_score int,
  value_past int,
  value_future int,
  median_value int,
  house_id int,
  home_cost int,
  bedrooms int,
  bathrooms int,
  square_feet int,
  street_adr text,
  city text,
  state text,
  zipcode int,
  house_img text,
  PRIMARY KEY (user_name, hood_id, house_id)
);