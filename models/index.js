// import models

const Pet = require('./Pets');
//const User = require('./User');
const Category = require('./Category');

Pet.belongsTo(Category, {
  foreignKey: 'category_id',
})

Category.hasMany(Pet, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})



module.exports = {
  Pet,
  Category,
  // User
};
