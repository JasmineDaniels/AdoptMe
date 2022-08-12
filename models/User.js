const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    User_name: { 
      type: DataTypes.STRING, 
      allowNull: false
    },
    User_Fav: { 
        type: DataTypes.STRING, 
        allowNull: false,
        references: {
            model: 'Dog',
            key: 'id'
          }, 
      },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;
