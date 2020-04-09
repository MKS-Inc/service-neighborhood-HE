const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const sfHoods = {
  1: 'Hayes Valley',
  2: 'Haight Ashbury',
  3: 'Nob Hill',
  4: 'North Beach',
  5: 'SoMa',
  6: 'The Mission',
  7: 'Castro',
  8: 'Outer Richmond',
  9: 'Outer Sunset',
  10: 'Pacific Heights',
  11: 'Russian Hill',
  12: 'Chinatown',
  13: 'Buena Vista',
  14: 'Fillmore',
  15: 'Presidio'
};

for (let h = 16; h <= 100000; h++) {
  sfHoods[h] = faker.name.lastName();
}

for (let i = 1; i <= 1; i++) {
  const csvWriter = createCsvWriter({
    path: `csv/pg/pghoods${i}.csv`,
    header: [
      {id: 'hood_id', title: 'hood_id'},
      {id: 'hood_name', title: 'hood_name'},
      {id: 'transit_score', title: 'transit_score'},
      {id: 'walk_score', title: 'walk_score'},
      {id: 'value_past', title: 'value_past'},
      {id: 'value_future', title: 'value_future'},
      {id: 'median_value', title: 'median_value'},
    ]
  });

  const neighborhoods = [];

  for (let n = 1; n <= 100000; n++) {
    let entry = {};

    entry.hood_id = n;
    entry.hood_name = sfHoods[entry.hood_id];
    entry.transit_score = faker.random.number({ min: 70, max: 99 });
    entry.walk_score = faker.random.number({ min: 70, max: 99 });
    entry.value_past = faker.random.number({ min: -3, max: 4 });
    entry.value_future = faker.random.number({ min: -3, max: 4 });
    entry.median_value = faker.random.number({ min: 1100, max: 2200 }) * 1000;

    neighborhoods.push(entry)
  }

  csvWriter.writeRecords(neighborhoods)       // returns a promise
    .then(() => {
        console.log(`...Done with pghoods${i}.csv`);
    });

};