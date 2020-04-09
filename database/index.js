const pgp = require('pg-promise')(/* options */)
const connection = {host: 'localhost', database: 'neighborhood_component'}
const postgres = pgp(connection)
postgres.connect();


const getNeighborhood = (id, callback) => {
  console.log('your friendly neighborhood query!')
  postgres.any('SELECT * FROM neighborhoods_table INNER JOIN houses_table ON (houses_table.hood_id = neighborhoods_table.hood_id) WHERE neighborhoods_table.hood_id = $1', id)
    .then((data) => {
      console.log('sucessful query!')
      callback(null, data);
    })
    .catch((err) => {
      console.log('something is wrong', err)
      callback(err);
    })
}


module.exports = {
  getNeighborhood
};
