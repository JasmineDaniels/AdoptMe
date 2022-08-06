const express = require ("express");
const sequelize = require ("./config/connection");
const path = require ("path");
const routes = require ("./controllers");
const exphbs = require ("express-handlebars");
const session = require ("express-session");
const SequelizeStore = require ("connect-session-sequelize")(session.Store);
const helpers = require ("./utils/helpers");

require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 3001; 
