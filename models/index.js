// import models

const Pet = require('./Pets');
const Category = require('./Category');
//const Dog = require('./Dogs');
//const User = require('./User');


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
  //User
};
