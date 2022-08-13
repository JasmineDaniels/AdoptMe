// import models
const Dog = require('./Dogs');
const User = require('./User');
const Category = require('./Category');

Dog.belongsTo(Category, {
  foreignKey: 'category_id',
})

Category.hasMany(Dog, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
Category.hasMany(User, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})


module.exports = {
  Dog,
  Category,
  User
};
