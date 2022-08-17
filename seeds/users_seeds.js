const { User } = require('../models');


const UserData = [
  {
    "email": "lelj28819@gmail.com",
    "password": "password12345"
  },
  {
    "email": "max.mcdonough@gmail.com",
    "password": "password12345"
  },
  {
    "email": "create.jasminedaniels@gmail.com",
    "password": "password12345"
  },
  {
    "email": "scrosa13@outlook.com",
    "password": "password12345"
  },
  {
    "email": "owikoff@gmail.com",
    "password": "password12345"
  }
];

const seedUser = () => User.bulkCreate(UserData);


module.exports = seedUser;



