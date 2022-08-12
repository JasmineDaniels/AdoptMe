// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Dog model (table) by extending off Sequelize's Model class
class Dog extends Model {}

// set up fields and rules for Dog model
Dog.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    Dog_name: { 
      type: DataTypes.STRING, 
      allowNull: false
      
    }, 
    Age: { 
      type: DataTypes.FLOAT, 
      allowNull: false,
            },
    category_id: { 
      type: DataTypes.INTEGER, 
      references: {
        model: 'category',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Dog',
  }
);

module.exports = Dog;
