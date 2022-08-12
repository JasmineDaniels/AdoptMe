const { Dog } = require('../models');

const DogData = [
  {
    Dog_name: 'Rocky',
    Age: 1,
    breed: 'German Shepherd',
    category_id: 1,
  },
  {
    Dog_name: 'Princess',
    Age: 3,
    breed: 'Yorkshire Terrior',
    category_id: 2,
  },
  {
    Dog_name: 'Chucky',
    Age: 7,
    Available: 1,
    category_id: 3,
  }
];

const seedDogs = () => Dog.bulkCreate(DogData);

module.exports = seedDogs;
