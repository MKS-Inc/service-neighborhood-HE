const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database')

const port = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});





app.get('/api/neighborhood/:id', (req, res) => {
  console.log('your friendly neighborhood get request!')
  let id = req.params.id
  db.getNeighborhood(id, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  })
})

