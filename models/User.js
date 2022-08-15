const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    User_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    User_Fav: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Dog",
        key: "id",
      },
    },
    // User_PW: { 
    //   type: DataTypes.STRING, 
    //   allowNull: false
    // },
    // User_Fav: { 
    //   type: DataTypes.INTEGER, 
    //   allowNull: true,
    //   references: {
    //     model: 'Pet', 
    //     key: 'id' //petfinder_id
    //   }, 
    // },
    // User_Contact: { 
    //   type: DataTypes.INTEGER, 
    //   allowNull: true,
    //   references: {
    //     model: 'Pet', 
    //     key: 'id' //petfinder_id
    //   }, 
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = User;
