// import important parts of sequelize library
const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Dog model (table) by extending off Sequelize's Model class
class Pet extends Model {}

// set up fields and rules for Pet model

//Pet
Pet.init( //add type for Pets or cats
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    }, 
    Pet_name: { //Pet_name
      type: DataTypes.STRING, 
      allowNull: false,
    }, 
    Age: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    breeds: { //breeds:
      type: DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type: DataTypes.STRING,
    },
    petfinder_id: {
      type: DataTypes.INTEGER,
    },
    type_id: { 
      type: DataTypes.INTEGER, 
      references: {
        model: 'category',
        key: 'id'
      }
    }
    // user_id:{
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'User',
    //     key: 'id'
    //   }
    // }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Pet',
  }
);

module.exports = Pet;

// category_id: { 
//   type: DataTypes.INTEGER, 
//   references: {
//     model: 'category',
//     key: 'id'
//   }
// }
