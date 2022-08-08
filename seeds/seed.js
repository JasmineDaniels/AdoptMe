const seedCategories = require('./category-seeds');
const seeddogs = require('./dog-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seeddogs();
  console.log('\n----- DOGS SEEDED -----\n');
  process.exit(0);
};

seedAll();
