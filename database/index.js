const pgp = require('pg-promise')(/* options */)
const connection = {host: 'ec2-54-183-161-27.us-west-1.compute.amazonaws.com', port: 5432, user: 'postgres', password: '123', database: 'neighborhood_component'}
const postgres = pgp(connection)
postgres.connect();

// get all neighborhood data
exports.getNeighborhood = (id, callback) => {
  // console.log('your friendly neighborhood query!')
  postgres.any('SELECT * FROM neighborhoods_table INNER JOIN houses_table ON (houses_table.hood_id = neighborhoods_table.hood_id) WHERE neighborhoods_table.hood_id = $1 LIMIT 12', id)
    .then((data) => {
      // console.log('sucessful query!')
      callback(null, data);
    })
    .catch((err) => {
      // console.log('something is wrong', err)
      callback(err);
    })
}

exports.getNeighborhoodData = (id, callback) => {
  // console.log('your friendly neighborhood query!')
  postgres.any('SELECT * FROM neighborhoods_table WHERE neighborhoods_table.hood_id = $1', id)
    .then((data) => {
      // console.log('sucessful query!')
      callback(null, data);
    })
    .catch((err) => {
      // console.log('something is wrong', err)
      callback(err);
    })
} 

exports.updateNeighborhood = (id, updates, callback) => {
  let table = 'neighborhoods_table';
  let updateQuery = pgp.helpers.update(updates, null, table);
  // console.log(updateQuery)
  postgres.any(updateQuery + ' WHERE hood_id = $1', id)
    .then(() => {
      callback();
    })
    .catch((err) => {
      callback(err);
    })
}

exports.addToLikedHomes = (params, callback) => {
  let insertQuery = pgp.helpers.insert(params, null, 'user_houses_table');
  // console.log(insertQuery)
  postgres.any(insertQuery)
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      callback(err);
    })
}

exports.removeFromLikedHomes = (user, house, callback) => {
  postgres.any('DELETE FROM user_houses_table WHERE user_id = $1 AND house = $2', [user, house])
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      callback(err);
    })
}
