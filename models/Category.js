const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    type: { // Type: Dog or Cat
      type: DataTypes.STRING, 
      allowNull: false
    },
    // user_id:{
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'User',
    //     key: 'id'
    //   }
    // }
    // pet_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Pet',
    //     key: 'id'
    //   }
    // }
    
    // breeds:{ // Pet API breeds.primary && breeds.secondary
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
