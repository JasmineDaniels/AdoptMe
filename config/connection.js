//const Sequelize = require('sequelize');
require('dotenv').config();
const { Sequelize } = require('sequelize');
//const sequelize = new Sequelize(process.env.MYSQLURI)

//module.exports = sequelize;

// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }


// module.exports = sequelize;

const sequelize = new Sequelize (process.env.MYSQLURI || process.env.JAWSDB_URL)
    ? new Sequelize(process.env.MYSQLURI)
    : new Sequelize(process.env.MYSQLDB, process.env.MYSQLUSER, process.env.MYSQLPW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  
module.exports = sequelize;