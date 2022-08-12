const { User } = require('../models');

const UserData = [
  {
    User_name: 'Joann',
    category_id: 1

  },
  {
    User_name: 'Sarah',
    category_id: 3
  }
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;



