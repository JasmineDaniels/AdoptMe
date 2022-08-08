const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Big'
  },
  {
    category_name: 'Medium'
  },
  {
    category_name: 'Small'
  },
  {
    category_name: 'Baby < 1'
  },
  {
    category_name: 'Young Btwn 1 and 4'
  },
  {
    category_name: 'Adult > 4'
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
