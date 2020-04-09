const express = require('express');
const bodyParser = require('body-parser');

var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@host:port/database')

const port = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// EXAMPLE

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })






// app.get('/api/neighborhoods', (req, res) => {
//   db.getThisNeighborhoodData(req.query.name)
//     .then((results) => res.status(200).json(results))
//     .catch((err) => {
//       throw err;
//     });
// });

// app.get('/api/houses', (req, res) => {
//   if (req.query.name) {
//     db.getAllNeighborhoodHouses(req.query.name)
//       .then((results) => res.status(200).json(results))
//       .catch((err) => {
//         throw err;
//       });
//   } else if (req.query.houseId) {
//     db.getHeartData(req.query.houseId)
//       .then((results) => res.status(200).json(results))
//       .catch((err) => {
//         throw err;
//       });
//   } else {
//     db.getAllHouseData()
//       .then((results) => res.status(200).json(results))
//       .catch((err) => {
//         throw err;
//       });
//   }
// });



// app.put('/api/houseid/heart', (req, res) => {
//   db.updateHeart(req.body.params.houseId)
//     .then((results) => res.status(200).json(results))
//     .catch((err) => {
//       throw err;
//     });
// });

// app.post('/api/houses', (req, res) => {
//   db.addHouseEntry(req.body.params)
//   .then((results) => res.status(200).json(results))
//   .catch((err) => {
//     throw err;
//   });
// });

// app.delete('api/houses', (req, res) => {
//   db.deleteHouseEntry(req.body.params.id)
//   .then((results) => res.status(200).json(results))
//   .catch((err) => {
//     throw err;
//   })
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
