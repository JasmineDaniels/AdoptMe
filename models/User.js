const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

const sequelize = require("../config/connection.js");


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // User_Fav: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: "Dog",
    //     key: "id",
    //   },
    // },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
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
  {hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = User;
