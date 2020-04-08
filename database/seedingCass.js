const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const sfHoods = {
  1: ['Hayes Valley', 95, 98, 1, 4, 1701000],
  2: ['Haight Ashbury', 84, 96, -3, 1, 1178000],
  3: ['Nob Hill', 86, 98, 3, -1, 1645000],
  4: ['North Beach', 95, 87, 4, -2, 1477000],
  5: ['SoMa', 95, 87, 4, -2, 1477000],
  6: ['The Mission', 95, 87, 4, -2, 1477000],
  7: ['Castro', 95, 87, 4, -2, 1477000],
  8: ['Outer Richmond', 86, 98, 3, -1, 1645000],
  9: ['Outer Sunset', 86, 98, 3, -1, 1645000],
  10: ['Pacific Heights', 95, 98, 1, 4, 1701000],
  11: ['Russian Hill', 95, 98, 1, 4, 1701000],
  12: ['Chinatown', 95, 98, 1, 4, 1701000],
  13: ['Buena Vista', 95, 98, 1, 4, 1701000],
  14: ['Fillmore', 95, 98, 1, 4, 1701000],
  15: ['Presidio', 95, 98, 1, 4, 1701000]
};

for (let h = 16; h <= 100000; h++) {
  sfHoods[h] = [];
  sfHoods[h][0] = faker.name.lastName();
  sfHoods[h][1] = faker.random.number({ min: 70, max: 99 });
  sfHoods[h][2] = faker.random.number({ min: 70, max: 99 });
  sfHoods[h][3] = faker.random.number({ min: -3, max: 4 });
  sfHoods[h][4] = faker.random.number({ min: -3, max: 4 });
  sfHoods[h][5] = faker.random.number({ min: 1100, max: 2200 }) * 1000;
}

// let neighborhoodId = () => { return Math.floor(Math.random() * Math.floor(14)) + 1 };
var counter = 0

for (let i = 1; i <= 10; i++) {
  const csvWriter = createCsvWriter({
    path: `csv/cass/casshouses${i}.csv`,
    header: [
      {id: 'hood_id', title: 'hood_id'},
      {id: 'hood_name', title: 'hood_name'},
      {id: 'transit_score', title: 'transit_score'},
      {id: 'walk_score', title: 'walk_score'},
      {id: 'value_past', title: 'value_past'},
      {id: 'value_future', title: 'value_future'},
      {id: 'median_value', title: 'median_value'},
      {id: 'house_id', title: 'house_id'},
      {id: 'home_cost', title: 'home_cost'},
      {id: 'bedrooms', title: 'bedrooms'},
      {id: 'bathrooms', title: 'bathrooms'},
      {id: 'square_feet', title: 'square_feet'},
      {id: 'street_adr', title: 'street_adr'},
      {id: 'city', title: 'city'},
      {id: 'state', title: 'state'},
      {id: 'zipcode', title: 'zipcode'},
      {id: 'house_img', title: 'house_img'},
    ]
  });

  const neighborhoods_houses = [];


  for (let n = 1; n <= 1000000; n++) {
    let entry = {};
    counter++;
    entry.hood_id = faker.random.number({ min: 1, max: 100000 });
    entry.hood_name = sfHoods[entry.hood_id][0];
    entry.transit_score = sfHoods[entry.hood_id][1];
    entry.walk_score = sfHoods[entry.hood_id][2];
    entry.value_past = sfHoods[entry.hood_id][3];
    entry.value_future = sfHoods[entry.hood_id][4];
    entry.median_value = sfHoods[entry.hood_id][5];
    entry.house_id = counter;
    entry.home_cost = Math.round((Math.floor(entry.median_value * faker.finance.amount(1.10, 1.30, 2))) / 1000) * 1000;
    entry.bedrooms = faker.random.number({ min: 3, max: 6 });
    entry.bathrooms = entry.bedrooms - faker.random.number({ min: 1, max: 2 });
    entry.square_feet = entry.bathrooms * faker.random.number({ min: 750, max: 950 });
    entry.street_adr = faker.address.streetAddress();
    entry.city = 'San Francisco';
    entry.state = 'California';
    entry.zipcode = faker.random.number({ min: 50000, max: 99999});
    entry.house_img = faker.random.number({min: 1, max: 1000})

    neighborhoods_houses.push(entry)
    if (n % 1000000 === 0) {
      console.log(`${n} completed of cass${i}.csv`);
    }
  }


  csvWriter.writeRecords(neighborhoods_houses)       // returns a promise
    .then(() => {
        console.log(`...Done with cass${i}.csv`);
    });

};
