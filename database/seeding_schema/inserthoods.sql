COPY neighborhoods_table(hood_id,hood_name,transit_score,walk_score,value_past,value_future,median_value) FROM '/Users/harrisonedwards/hackReactor/sf126/sdc/abode-similar-homes-monthly-cost-neighborhood-facts/database/csv/pg/pghoods1.csv' DELIMITER ',' CSV HEADER;