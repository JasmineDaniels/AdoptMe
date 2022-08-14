const { Category } = require('../models');

const categoryData = [
  {
    type: 'Dog'
  },
  {
    type: 'Cat'
  },
  {
    type: 'Snake'
  },
  {
    type: 'Horse'
  },
  {
    type: 'Pig'
  },
  {
    type: 'Turtle'
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
