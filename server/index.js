require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');

const db = require('../database')

const port = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


// Recieve Neighborhood Data and Nearby Homes for specefic Neighborhood
app.get('/api/neighborhood/:id', (req, res) => {
  // console.log('your friendly neighborhood get request!')
  let id = req.params.id
  // let id = faker.random.number({ min: 1, max: 100000 })
  db.getNeighborhood(id, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  })
})

// just get one neighborhoods data
app.get('/api/neighborhood/data/:id', (req, res) => {
  // console.log('your friendly neighborhood get request!')
  // let id = req.params.id
  let id = faker.random.number({ min: 1, max: 100000 })
  db.getNeighborhoodData(id, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  })
})

// Update Neighborhood Info
app.put('/api/neighborhood/:id', (req, res) => {
  // console.log('your friendly neighborhood get request!')
  let params = req.params;
  let id = req.params.id;
  db.updateNeighborhood(id, params, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  })
})

// Add house Listing to users Liked List
app.post('/api/likes/:user_id/:house', (req, res) => {
  // console.log('your friendly neighborhood get request!')
  let params = req.params;
  db.addToLikedHomes(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  })
})

// Delete House From like List
app.delete('/api/likes/:user_id/:house_id', (req, res) => {
  // console.log('your friendly neighborhood get request!')
  let userId = req.params.user_id;
  let houseId = req.params.house_id;
  db.removeFromLikedHomes(userId, houseId, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  })
})

// Create New User
app.put('/api/users/:user_name', (req, res) => {
  // console.log('your friendly neighborhood get request!')
  let username = req.params.user_name;
  db.createNewUser(username, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  })
})
