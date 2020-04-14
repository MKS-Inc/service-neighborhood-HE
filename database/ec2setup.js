// const db = require('./index')
const pgp = require('pg-promise')(/*options*/)
const QueryFile = require('pg-promise').QueryFile;
const path = require('path');
const connection = require('../env');
const postgres = pgp(connection.connection)
postgres.connect();

const schemaPath = path.join(__dirname, './seeding_schema/pgschema.sql');
const insertHoodsPath = path.join(__dirname, './seeding_schema/inserthoods.sql');
const insertHousesPath = path.join(__dirname, './seeding_schema/inserthouses.sql');

const schemaQuery = new QueryFile(schemaPath, {minify: true});
const insertHoodsQuery = new QueryFile(insertHoodsPath, {minify: true});
const insertHousesQuery = new QueryFile(insertHousesPath, {minify: true});

postgres.any(schemaQuery);
postgres.any(insertHoodsQuery);
postgres.any(insertHousesQuery);
