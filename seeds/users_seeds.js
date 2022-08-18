const { User } = require('../models');


const UserData = [
  {
    "username": "Ismael",
    "email": "lelj28819@gmail.com",
    "password": "password12345"
  },
  {
    "username": "Max",
    "email": "max.mcdonough@gmail.com",
    "password": "password12345"
  },
  {
    "username": "Jasmine",
    "email": "create.jasminedaniels@gmail.com",
    "password": "password12345"
  },
  {
    "username": "Steve",
    "email": "scrosa13@outlook.com",
    "password": "password12345"
  },
  {
    "username": "Ortal",
    "email": "owikoff@gmail.com",
    "password": "password12345"
  }
];

const seedUser = () => User.bulkCreate(UserData);


module.exports = seedUser;



