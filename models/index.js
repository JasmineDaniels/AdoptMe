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
// Category.hasMany(User, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE',
// })

// Pet.belongsTo(User, {
//   foreignKey: 'user_id',
// })

// User.hasMany(Pet, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// })

//Pet.belongsToMany(Category)


module.exports = {
  Pet,
  Category,
  //User
};
