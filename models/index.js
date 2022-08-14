// import models

const Dog = require('./Dogs');
const User = require('./User');

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

Category.hasMany(User, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})



module.exports = {
  Pet,
  Category,
  User
};
