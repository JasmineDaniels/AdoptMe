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

// Pet.belongsToMany(User, { through: Category})
// // foreignKey: 'type_id'

// User.belongsToMany(Pet, { through: Category})
// // foreginKey: 'pet_id'



module.exports = {
  Pet,
  Category,
  // User
};
