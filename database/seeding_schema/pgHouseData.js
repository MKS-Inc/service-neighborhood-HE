const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

var counter = 0;

for (let i = 1; i <= 10; i++) {
  const csvWriter = createCsvWriter({
    path: `csv/pg/pghouses${i}.csv`,
    header: [
      {id: 'house_id', title: 'house_id'},
      {id: 'hood_id', title: 'hood_id'},
      {id: 'home_cost', title: 'home_cost'},
      {id: 'bedrooms', title: 'bedrooms'},
      {id: 'bathrooms', title: 'bathrooms'},
      {id: 'street_address', title: 'street_address'},
      {id: 'city', title: 'city'},
      {id: 'state', title: 'state'},
      {id: 'zipcode', title: 'zipcode'},
      {id: 'square_feet', title: 'square_feet'},
      {id: 'house_img', title: 'house_img'},
    ]
  });

  const neighborhoods = [];

  for (let n = 1; n <= 1000000; n++) {
    let entry = {};
    counter++;

    entry.house_id = counter;
    entry.hood_id = faker.random.number({ min: 1, max: 100000 })
    entry.home_cost = Math.round((Math.floor((faker.random.number({ min: 1100, max: 2200 }) * 1000) * faker.finance.amount(1.10, 1.30, 2))) / 1000) * 1000;
    entry.bedrooms = faker.random.number({ min: 3, max: 6 });
    entry.bathrooms = entry.bedrooms - faker.random.number({ min: 1, max: 2 });
    entry.street_address = faker.address.streetAddress();
    entry.city = 'San Francisco';
    entry.state = 'California';
    entry.zipcode = faker.random.number({ min: 50000, max: 99999});
    entry.square_feet = entry.bathrooms * faker.random.number({ min: 750, max: 950 });
    entry.house_img = faker.random.number({min: 1, max: 1000})

    neighborhoods.push(entry)
  }

  csvWriter.writeRecords(neighborhoods)       // returns a promise
    .then(() => {
        console.log(`...Done with pghouses${i}.csv`);
    });

};